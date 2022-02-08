/* eslint-disable no-param-reassign */
export default {
  beforeMount(element, binding) {
    Object.keys(binding.value).forEach((position) => {
      element.style[position] = binding.value[position];
    });
    element.style.position = 'absolute';
  },
};
