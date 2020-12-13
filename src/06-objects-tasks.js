/* ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  return {
    width,
    height,
    getArea() {
      return width * height;
    },
  };
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  let obj = new proto.constructor();
  obj = Object.assign(obj, JSON.parse(json));
  return obj;
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurences
 *
 * All types of selectors can be combined using the combinators ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string repsentation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

class MySuperBaseElementSelector {
  element(value) {
    if (
      this.idSelector
      || this.classSelector
      || this.attrSelector
      || this.pseudoClassSelector
      || this.pseudoElementSelector
    ) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    if (this.elementSelector) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }

    this.elementSelector = value;
    return this;
  }

  id(value) {
    if (this.idSelector) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }

    if (
      this.classSelector
      || this.attrSelector
      || this.pseudoClassSelector
      || this.pseudoElementSelector
    ) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    this.idSelector = `#${value}`;
    return this;
  }

  class(value) {
    if (
      this.attrSelector
      || this.pseudoClassSelector
      || this.pseudoElementSelector
    ) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    if (!this.classSelector) {
      this.classSelector = [`.${value}`];
    } else {
      this.classSelector.push(`.${value}`);
    }

    return this;
  }

  attr(value) {
    if (
      this.pseudoClassSelector
      || this.pseudoElementSelector
    ) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    if (!this.attrSelector) {
      this.attrSelector = [`[${value}]`];
    } else {
      this.attrSelector.push(`[${value}]`);
    }

    return this;
  }

  pseudoClass(value) {
    if (this.pseudoElementSelector) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    if (!this.pseudoClassSelector) {
      this.pseudoClassSelector = [`:${value}`];
    } else {
      this.pseudoClassSelector.push(`:${value}`);
    }

    return this;
  }

  pseudoElement(value) {
    if (this.pseudoElementSelector) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }
    this.pseudoElementSelector = `::${value}`;
    return this;
  }

  combine(selector1, combinator, selector2) {
    const selector1Stringified = selector1.stringify();
    const selector2Stringified = selector2.stringify();

    if (!this.combination) {
      this.combination = [selector1Stringified, combinator, selector2Stringified];
    } else {
      this.combination.push([selector1Stringified, combinator, selector2Stringified]);
    }
    return this;
  }

  stringify() {
    if (this.combination) {
      return this.combination.join(' ');
    }
    const elementSelector = this.elementSelector ? this.elementSelector : '';
    const idSelector = this.idSelector ? this.idSelector : '';
    const classSelector = this.classSelector ? this.classSelector.join('') : '';
    const attrSelector = this.attrSelector ? this.attrSelector.join('') : '';
    const pseudoClassSelector = this.pseudoClassSelector ? this.pseudoClassSelector.join('') : '';
    const pseudoElementSelector = this.pseudoElementSelector ? this.pseudoElementSelector : '';

    this.elementSelector = null;
    this.idSelector = null;
    this.classSelector = null;
    this.attrSelector = null;
    this.pseudoClassSelector = null;
    this.pseudoElementSelector = null;
    this.combination = null;

    return `${elementSelector}${idSelector}${classSelector}${attrSelector}${pseudoClassSelector}${pseudoElementSelector}`;
  }
}

const cssSelectorBuilder = {

  element(value) {
    const baseClass = new MySuperBaseElementSelector();
    baseClass.element(value);
    return baseClass;
  },

  id(value) {
    const baseClass = new MySuperBaseElementSelector();
    baseClass.id(value);
    return baseClass;
  },

  class(value) {
    const baseClass = new MySuperBaseElementSelector();
    baseClass.class(value);
    return baseClass;
  },

  attr(value) {
    const baseClass = new MySuperBaseElementSelector();
    baseClass.attr(value);
    return baseClass;
  },

  pseudoClass(value) {
    const baseClass = new MySuperBaseElementSelector();
    baseClass.pseudoClass(value);
    return baseClass;
  },

  pseudoElement(value) {
    const baseClass = new MySuperBaseElementSelector();
    baseClass.pseudoElement(value);
    return baseClass;
  },

  combine(selector1, combinator, selector2) {
    const baseClass = new MySuperBaseElementSelector();
    baseClass.combine(selector1, combinator, selector2);
    return baseClass;

    // console.log(selector1);
    // console.log(combinator);
    // console.log(selector2);
    // console.log(selector1 === selector2);
    // const selector1Stringified = selector1.stringify();
    // const selector2Stringified = selector2.stringify();

    // if (!this.combination) {
    //   this.combination = [selector1Stringified, combinator, selector2Stringified];
    // } else {
    //   this.combination.push([selector1Stringified, combinator, selector2Stringified]);
    // }
    // return this;
  },

  // stringify() {
  //   if (this.combination) {
  //     return this.combination.join(' ');
  //   }
  //   const elementSelector = this.elementSelector ? this.elementSelector : '';
  //   const idSelector = this.idSelector ? this.idSelector : '';
  //   const classSelector = this.classSelector ? this.classSelector.join('') : '';
  //   const attrSelector = this.attrSelector ? this.attrSelector.join('') : '';
  // const pseudoClassSelector = this.pseudoClassSelector ? this.pseudoClassSelector.join('') : '';
  //   const pseudoElementSelector = this.pseudoElementSelector ? this.pseudoElementSelector : '';

  //   this.elementSelector = null;
  //   this.idSelector = null;
  //   this.classSelector = null;
  //   this.attrSelector = null;
  //   this.pseudoClassSelector = null;
  //   this.pseudoElementSelector = null;
  //   this.combination = null;

  // return `${elementSelector}${idSelector}${classSelector}${attrSelector}
  // ${pseudoClassSelector}${pseudoElementSelector}`;
  // },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
