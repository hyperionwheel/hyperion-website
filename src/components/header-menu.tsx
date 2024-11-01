'use client'

import { useTranslations } from 'next-intl'
import { NavLink } from './nav-link'
import { cn } from '@/lib/utils'

export const HeaderMenu = ({ className, mobile = false }: { className?: string; mobile?: boolean }) => {
  const t = useTranslations('header')

  return (
    <nav className={cn('nav flex items-center text-base transition-colors duration-500', className)}>
      <ul
        className={cn('flex gap-3.75 pr-3.75 items-center lg:gap-7.5 lg:pr-7.5', {
          'flex-col items-[normal] text-[34px] leading-[40px] gap-1.25 items-start': mobile,
        })}
      >
        <li className="h-full">
          <NavLink href="/">{t('nav_home')}</NavLink>
        </li>
        <li>
          <NavLink href="/about">{t('nav_about')}</NavLink>
        </li>
        <li>
          <NavLink href="/partnership">{t('nav_partnership')}</NavLink>
        </li>
        <li>
          <NavLink href="/faq">{t('nav_FAQ')}</NavLink>
        </li>
      </ul>
    </nav>
  )
}
