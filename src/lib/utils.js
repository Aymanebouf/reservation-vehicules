
export function cn(...inputs) {
  // Cette fonction n'est pas nécessaire avec PrimeReact,
  // mais nous la gardons pour compatibilité avec le code existant
  return inputs.filter(Boolean).join(' ');
}
