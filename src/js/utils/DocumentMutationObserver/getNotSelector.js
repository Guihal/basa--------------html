export const getNotSelector = (selector, notSelector) => {
    const not = `:not(${notSelector})`
    if (!selector.includes(',')) {
        return `${selector}${not}`
    }

    const splitSelector = selector.split(',')
    selector = ''

    for (let i = 0; i < splitSelector.length; i++) {
        if (i === splitSelector.length - 1) {
            selector += `${splitSelector[i]}${not}`
            continue
        }

        selector += `${splitSelector[i]}${not},`
    }

    return selector
}
