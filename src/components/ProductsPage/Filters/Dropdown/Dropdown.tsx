import React, {useState} from 'react';
import styles from './dropdown.module.css';

interface IDropdown {
  children: React.ReactNode,
  button: React.ReactNode,
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {}

export function Dropdown({children, button, isOpen, onClose = NOOP, onOpen = NOOP} : IDropdown) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  React.useEffect(() => {
    setIsDropdownOpen(isOpen)
  }, [isOpen])

  React.useEffect(() => {
    isDropdownOpen ? onOpen() : onClose()
  }, [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {
        isDropdownOpen && (
          <div className={styles.listContainer}>
            <div className={styles.list}>
              {children}
            </div>
          </div>
        )
      }
    </div>  
  );
}
