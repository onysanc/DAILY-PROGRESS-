// chart-labels.js
const alwaysOnLabelConfig = {
    anchor: 'end',
    align: 'end',
    clamp: true,
    offset: 2,
    // Forces labels to always show
    display: (ctx) => {
        const v = ctx.dataset.data[ctx.dataIndex];
        return v !== null && v !== 0; 
    },
    font: {
        size: 12, // Increased for better readability
        weight: 'bold'
    },
    // Set to black as requested
    color: '#000000', 
    formatter: (value) => value
};