import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import SunIconDark from "/public/icons/clear-sky_darkmode.png";
import MoonIcon from "/public/icons/night-mode.png";

export default function BurgerMenu({ isDark, onToggleDarkMode }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <StyledTrigger aria-label="Menü öffnen" $isDark={isDark}>
          <HamburgerMenuIcon />
        </StyledTrigger>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <StyledContent sideOffset={8} align="end" $isDark={isDark}>
          <StyledItem onSelect={onToggleDarkMode} $isDark={isDark}>
            <StyledItemContent>
              <Image
                src={isDark ? SunIconDark : MoonIcon}
                alt={isDark ? "Sonne" : "Mond"}
                width={20}
                height={20}
              />
              {isDark ? "helle Ansicht" : "dunkle Ansicht"}
            </StyledItemContent>
          </StyledItem>
          <StyledSeparator $isDark={isDark} />
          <StyledItem disabled $isDark={isDark}>
            ⚙️ Einstellungen
          </StyledItem>
          <DropdownMenu.Arrow asChild>
            <StyledArrow $isDark={isDark} />
          </DropdownMenu.Arrow>
        </StyledContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

const StyledTrigger = styled.button`
  position: fixed;
  top: var(--spacing-xl);
  right: var(--spacing-xl);
  z-index: 3000;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;
    stroke: ${({ $isDark }) =>
      $isDark ? "var(--color-textDark-200)" : "var(--color-text-900)"};
    fill: none;
  }
`;

const StyledContent = styled(DropdownMenu.Content)`
  font-family: "Poppins", sans-serif;
  background-color: ${({ $isDark }) =>
    $isDark ? "var(--color-surfaceDark-800)" : "var(--color-surface-50)"};
  border-radius: var(--radius-md);
  padding: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 3000;
  min-width: 180px;
`;

const StyledItem = styled(DropdownMenu.Item)`
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.9rem;
  color: ${({ $isDark }) =>
    $isDark ? "var(--color-textDark-200)" : "var(--color-text-900)"};
  outline: none;

  &:hover {
    background-color: ${({ $isDark }) =>
      $isDark ? "var(--color-surfaceDark-700)" : "var(--color-surface-200)"};
  }

  &[data-disabled] {
    opacity: 0.4;
    cursor: default;
  }
`;

const StyledItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: ${({ $isDark }) =>
    $isDark ? "var(--color-surfaceDark-600)" : "var(--color-surface-300)"};
  margin: 0.25rem 0;
`;

const StyledArrow = styled.div`
  width: 10px;
  height: 5px;
  background-color: ${({ $isDark }) =>
    $isDark ? "var(--color-surfaceDark-800)" : "var(--color-surface-50)"};
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: rotate(180deg);
`;
