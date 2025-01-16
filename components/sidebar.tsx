'use client';

import { cn } from '@/lib/utils';
import {
  BarChart3,
  Users,
  Building2,
  Briefcase,
  Calendar,
  Settings,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  {
    label: 'Dashboard',
    icon: BarChart3,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Clients',
    icon: Users,
    href: '/clients',
    color: 'text-violet-500',
  },
  {
    label: 'Companies',
    icon: Building2,
    href: '/companies',
    color: 'text-pink-700',
  },
  {
    label: 'Projects',
    icon: Briefcase,
    href: '/projects',
    color: 'text-orange-700',
  },
  {
    label: 'Calendar',
    icon: Calendar,
    href: '/calendar',
    color: 'text-emerald-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">CRM</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <Link
          href="/sign-out"
          className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition text-zinc-400"
        >
          <div className="flex items-center flex-1">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </div>
        </Link>
      </div>
    </div>
  );
}