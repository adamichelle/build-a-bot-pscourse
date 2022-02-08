/* eslint-disable no-param-reassign */
export default {
  beforeMount(element, binding) {
    if (binding.arg !== 'position') return;

    Object.keys(binding.modifiers).forEach((key) => {
      element.style[key] = '5px';
    });
    element.style.position = 'absolute';
  },
};
