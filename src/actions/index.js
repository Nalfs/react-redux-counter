export const increment = () => ({
    type: 'INCREMENT',
});

export const decrement = () => ({
    type: 'DECREMENT',
});

export const incrementx = (custom_inc_value) => ({
    type: 'INCREMENTX',
    x: custom_inc_value
});