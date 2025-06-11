// Utility hook for keyboard accessibility on clickable divs
export function useKeyboardClick(onClick) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(event);
    }
  };

  return {
    onClick,
    onKeyDown: handleKeyDown,
    tabIndex: 0,
    role: 'button',
    'aria-pressed': false
  };
}