export class Accordion {
    accordionHeight
    btn
    content
    timeout
    pass = true
    duration = 300

    constructor(btn, content) {
        btn.classList.add('init')
        this.btn = btn
        this.content = content
        this.accordionHeight = this.content.offsetHeight

        this.addEvent()
    }

    addEvent() {
        this.btn.addEventListener('click', () => {
            if (!this.pass) return

            if (this.getAccordionState()) {
                this.hideAccordion()
            } else {
                this.showAccordion()
            }
        })
    }

    getAccordionState() {
        if (this.btn.classList.contains('open')) {
            return true
        }

        return false
    }

    showAccordion() {
        this.pass = false

        this.btn.classList.add('open')
        this.content.classList.remove('hide')

        const animate = this.content.animate(this.getShowAnimate(), this.getTimingAnimate())

        animate.addEventListener('finish', () => {
            this.content.classList.add('show')
            this.pass = true
        })
    }

    hideAccordion() {
        this.accordionHeight = this.content.offsetHeight
        this.pass = false

        this.btn.classList.remove('open')
        this.content.classList.remove('show')

        const animate = this.content.animate(this.getHideAnimate(), this.getTimingAnimate())

        animate.addEventListener('finish', () => {
            this.content.classList.add('hide')
            this.pass = true
        })
    }

    getHideAnimate() {
        return [
            { maxHeight: `${this.accordionHeight}px`, opacity: 1 },
            { maxHeight: `${0}px`, opacity: 0 },
        ]
    }

    getShowAnimate() {
        return [
            { maxHeight: `${0}px`, opacity: 0 },
            { maxHeight: `${this.accordionHeight}px`, opacity: 1 },
        ]
    }

    getTimingAnimate() {
        return {
            duration: this.duration,
            easing: 'ease',
        }
    }

    showEventFinal() {
        this.content.classList.add('show')
    }

    hideEventFinal() {
        this.content.classList.add('hide')
    }
}
