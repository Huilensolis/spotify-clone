import { ReactNode } from 'react'

export function AsideLayout({ children }: { children: ReactNode }) {
	return (
		<aside className="lg:max-w-sm w-full gap-2 flex lg:flex-col items-center justify-start">
			{children}
		</aside>
	)
}
