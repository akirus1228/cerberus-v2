export function boundObject(state: any, payload: any) {
  if (payload) {
    const keys = Object.keys(payload);
    keys.forEach(key => {
      state[key] = payload[key];
    })
  }
}

export function formatCurrency(c: number, precision = 0) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
  }).format(c);
}

export function formatNumber(number = 0, precision = 0) {
  const array = number.toString().split('.');
  if (array.length === 1) return number.toString();
  if (precision === 0) return array[0].toString();

  const poppedNumber = array.pop() || '0';
  array.push(poppedNumber.substring(0, precision));
  const result = array.join('.');
  return result;
}

export const minutesAgo = (x: number) => {
  const now = new Date().getTime();
  return new Date(now - x * 60000).getTime();
}

export function prettifySeconds(seconds: number, resolution?: string) {
  if (seconds !== 0 && !seconds) {
    return '';
  }
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  if (resolution === 'day') {
    return d + (d == 1 ? ' day' : ' days');
  }
  const dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hr, ' : ' hrs, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' min' : ' mins') : '';
  let result = dDisplay + hDisplay + mDisplay;
  if (mDisplay === '') {
    result = result.slice(0, result.length - 2);
  }
  return result;
}
