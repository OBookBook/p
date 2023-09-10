class FadeSlider {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.intersectionObserverOptions = {
      threshold: 0.5,
    };

    this.fadeSlideClass = 'js-fade-slide';
    this.fadeInClass = 'js-fade-in';

    this._init();
  }

  _init() {
    this.elements.forEach((element) => {
      element.classList.add(this.fadeSlideClass);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              element.classList.add(this.fadeInClass);
              observer.unobserve(entry.target);
            }
          });
        },
        this.intersectionObserverOptions
      );
      observer.observe(element);
    });
  }
}
