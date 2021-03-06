import React from 'react'
import classnames from 'classnames'

export const Tabs = ({ children }) => {
  return <nav
    className='flex items-center justify-center mb-2 mx-auto text-center'
  >
    {children}
  </nav>
}

export const Tab = ({ changeHash, selected, hash, children }) => {
  const handleClick = (e) => {
    e.preventDefault()

    changeHash(hash)
  }

  return <a
    onClick={handleClick}
    className={classnames(
      'cursor-pointer relative capitalize text-center leading-none rounded-full hover:bg-accent-grey-1 flex justify-start items-center text-sm xs:text-lg lg:text-xl py-2 px-6 lg:px-8 trans tracking-wider outline-none focus:outline-none active:outline-none font-bold mx-1 xs:mx-2 sm:mx-3',
      {
        'text-default hover:text-highlight-2': !selected,
        'selected bg-accent-grey-1 hover:bg-accent-grey-1': selected,
      }
    )}
  >
    {children}
  </a>
}

export const Content = ({ children, className }) => {
  return <div
    className={classnames(className, 'py-2 flex')}
  >
    {children}
  </div>
}

export const ContentPane = ({ children, isSelected, alwaysPresent }) => {
  let hiddenClassName = 'hidden'
  let visibleClassName = 'flex-1'

  if (alwaysPresent) {
    hiddenClassName = 'pointer-events-none opacity-0 w-0 flex-shrink'
  }

  return (
    <div className={classnames(
      {
        [hiddenClassName]: !isSelected,
        [visibleClassName]: isSelected
      }
    )}>
      {children}
    </div>
  )
}