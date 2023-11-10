export const INC_POINT = {coordinates: [37.95, 55.9], title: 'Marker inc #0'};
export const INC2_POINT = {coordinates: [38.1, 55.8],title: 'Marker INC2_POINT',  color: '#fcc', draggable: true};

export const POINTS = [
  {coordinates: [37.8, 55.8],
    title: 'Marker full',
  },
  {
    coordinates: [37.6, 55.847],
    color: '#ff9f82',
    title: 'Marker 1',
    draggable: true,
    element: circle
  },
  {
    coordinates: [37.529789, 55.687086],
    color: '#3caa3c',
    title: 'Marker 2',
    draggable: true,
    element: circle
  },
  {
    coordinates: [37.95, 55.782392],
    color: 'yellow',
    title: 'color <strong>sun<strong>',
    draggable: true,
    onClick: () => alert('click')
  },
];


function circle(props: any) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.color = props.color;
  props.radius && circle.style.setProperty('--radius', props.radius);
  props.icon && circle.style.setProperty('--icon', props.icon);
  circle.title = props.title;
  return circle;
}
