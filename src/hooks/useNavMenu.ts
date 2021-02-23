import { useCallback, useEffect, Dispatch, SetStateAction } from 'react';

const useNavMenu = (
  setIsNavMenuOpen: Dispatch<SetStateAction<boolean>>,
  isNavbarOpen: boolean
): [() => void, () => void] => {
  const toggleNavMenu = useCallback(
    (): void => setIsNavMenuOpen((prevIsNavMenuOpen: boolean) => !prevIsNavMenuOpen),
    [setIsNavMenuOpen]
  );

  const closeNavMenu = useCallback((): void => setIsNavMenuOpen(false), [setIsNavMenuOpen]);

  useEffect(() => {
    const catchClicksOnBody = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;

      target &&
        target.id !== 'navbar-burger' &&
        target.id !== 'navMenu' &&
        isNavbarOpen &&
        closeNavMenu();
    };

    document.addEventListener('click', catchClicksOnBody);
    return () => document.removeEventListener('click', catchClicksOnBody);
  }, [isNavbarOpen, setIsNavMenuOpen, closeNavMenu]);

  return [toggleNavMenu, closeNavMenu];
};

export default useNavMenu;
