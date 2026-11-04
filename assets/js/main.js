/* ==========================================================================
   MasterSafe Armoring — comportamiento de la interfaz
   ========================================================================== */

(function () {
    'use strict';

    var root = document.documentElement;

    /* ----------------------------------------------------------------------
       Variables de medida (--vh, --sw) como en el sistema de referencia:
       --sw es el espacio lateral fuera del contenedor de 1100px, usado para
       que las imágenes de los teasers desborden hasta el borde de la ventana.
       ---------------------------------------------------------------------- */

    function resize() {
        var vw = document.body.clientWidth;
        var sw = Math.ceil((vw - 1100) / 2);
        if (sw < 0) sw = 0;
        root.style.setProperty('--sw', sw + 'px');
        root.style.setProperty('--vh', window.innerHeight + 'px');
    }

    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize);
    resize();

    /* ----------------------------------------------------------------------
       Cabecera: barra al hacer scroll + menú móvil
       ---------------------------------------------------------------------- */

    var header = document.querySelector('.js-header');

    if (header) {
        var onScroll = function () {
            if (window.pageYOffset > 20) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        var menuButton = header.querySelector('.js-header-menu-button');

        if (menuButton) {
            menuButton.addEventListener('click', function (event) {
                event.preventDefault();
                header.classList.toggle('header--on');
            });
        }

        header.querySelectorAll('.header__navigation-item a').forEach(function (link) {
            link.addEventListener('click', function () {
                header.classList.remove('header--on');
            });
        });
    }

    /* ----------------------------------------------------------------------
       Vídeo del hero: reproducción automática silenciada + conmutador de sonido
       ---------------------------------------------------------------------- */

    var introVideo = document.querySelector('.js-intro-video');

    if (introVideo) {
        var playPromise = introVideo.play();

        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function () { /* el navegador bloqueó la reproducción */ });
        }

        var muteToggle = document.querySelector('.js-intro-video-mute-toggle');

        if (muteToggle) {
            muteToggle.addEventListener('click', function () {
                introVideo.muted = !introVideo.muted;
                muteToggle.classList.toggle('intro__video-mute-toggle--on', !introVideo.muted);
            });
        }
    }

    /* ----------------------------------------------------------------------
       Revelado al entrar en pantalla (imágenes de teaser y bloques de texto)
       ---------------------------------------------------------------------- */

    var revealables = document.querySelectorAll('.js-reveal');

    if (revealables.length) {
        if ('IntersectionObserver' in window) {
            var revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -10% 0px' });

            revealables.forEach(function (element) {
                revealObserver.observe(element);
            });
        } else {
            revealables.forEach(function (element) {
                element.classList.add('is-revealed');
            });
        }
    }

    /* Imágenes de los teasers: entran deslizándose desde su propio borde */
    var slidingImages = document.querySelectorAll('.teaser-images__image');

    if (slidingImages.length && 'IntersectionObserver' in window) {
        slidingImages.forEach(function (image) {
            image.classList.add('teaser-images__image--before');
        });

        var slideObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('teaser-images__image--before');
                    slideObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px' });

        slidingImages.forEach(function (image) {
            slideObserver.observe(image);
        });
    }

    /* ----------------------------------------------------------------------
       Disruptor: pestaña lateral plegable
       ---------------------------------------------------------------------- */

    var disruptor = document.querySelector('.js-disruptor');

    if (disruptor) {
        var disruptorTab = disruptor.querySelector('.js-disruptor-tab');

        if (disruptorTab) {
            disruptorTab.addEventListener('click', function () {
                disruptor.classList.toggle('disruptor--out');
            });
        }

        window.setTimeout(function () {
            disruptor.classList.remove('disruptor--out');
        }, 1500);
    }

    /* ----------------------------------------------------------------------
       Galería con visor
       ---------------------------------------------------------------------- */

    var lightbox = document.querySelector('.js-lightbox');

    if (lightbox) {
        var items = Array.prototype.slice.call(document.querySelectorAll('.js-gallery-item'));
        var lightboxImage = lightbox.querySelector('.js-lightbox-image');
        var lightboxCaption = lightbox.querySelector('.js-lightbox-caption');
        var current = 0;

        var show = function (index) {
            if (!items.length) return;
            current = (index + items.length) % items.length;
            var source = items[current].querySelector('img');
            lightboxImage.src = source.getAttribute('data-full') || source.src;
            lightboxImage.alt = source.alt;
            lightboxCaption.textContent = source.alt;
        };

        var open = function (index) {
            show(index);
            lightbox.classList.add('lightbox--on');
            document.body.style.overflow = 'hidden';
        };

        var close = function () {
            lightbox.classList.remove('lightbox--on');
            document.body.style.overflow = '';
        };

        items.forEach(function (item, index) {
            item.addEventListener('click', function () {
                open(index);
            });
        });

        lightbox.querySelector('.js-lightbox-close').addEventListener('click', close);
        lightbox.querySelector('.js-lightbox-prev').addEventListener('click', function () { show(current - 1); });
        lightbox.querySelector('.js-lightbox-next').addEventListener('click', function () { show(current + 1); });

        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) close();
        });

        document.addEventListener('keydown', function (event) {
            if (!lightbox.classList.contains('lightbox--on')) return;
            if (event.key === 'Escape') close();
            if (event.key === 'ArrowLeft') show(current - 1);
            if (event.key === 'ArrowRight') show(current + 1);
        });
    }

    /* ----------------------------------------------------------------------
       Formulario de contacto (EmailJS)
       ---------------------------------------------------------------------- */

    var form = document.querySelector('.js-contact-form');

    if (form) {
        var SERVICE_ID = 'service_6fe2jsg';
        var TEMPLATE_ID = 'template_27wgcjl';
        var PUBLIC_KEY = 'hin6SYn84_mwmOemr';

        var successNote = form.querySelector('.js-form-success');
        var errorNote = form.querySelector('.js-form-error');
        var submit = form.querySelector('.js-form-submit');
        var submitLabel = submit.querySelector('.icon-label-button__label');
        var submitText = submitLabel.textContent;

        if (window.emailjs) {
            window.emailjs.init(PUBLIC_KEY);
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            successNote.classList.remove('form__note--on');
            errorNote.classList.remove('form__note--on');

            if (!window.emailjs) {
                errorNote.classList.add('form__note--on');
                return;
            }

            submit.disabled = true;
            submitLabel.textContent = 'ENVIANDO...';

            var data = new FormData(form);

            window.emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                to_email: 'contacto@astrawebdevelopers.com',
                from_name: data.get('name'),
                from_email: data.get('email'),
                phone: data.get('phone'),
                service: data.get('service'),
                message: data.get('message')
            }).then(function () {
                successNote.classList.add('form__note--on');
                form.reset();
            }).catch(function () {
                errorNote.classList.add('form__note--on');
            }).then(function () {
                submit.disabled = false;
                submitLabel.textContent = submitText;
            });
        });
    }

    /* ----------------------------------------------------------------------
       Año en el pie
       ---------------------------------------------------------------------- */

    document.querySelectorAll('.js-year').forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });
}());
