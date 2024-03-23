export const getTypeColor = (type: string) => {
  let color = '';
  switch (type) {
    case 'simple': color = 'success'; break;
    case 'luxury': color = 'danger'; break;
    case 'rugged': color = 'info'; break;
  }
  return color;
}

export const capitalizedWord = (word: string) => {
  return word[0].toUpperCase() + word.substring(1);
}