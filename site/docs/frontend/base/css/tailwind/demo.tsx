import React from 'react'

export function GroupHover() {
  return (
    <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
      <div className="flex items-center space-x-3">
        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Project x</h3>
      </div>
      <p className="text-slate-500 group-hover:text-white text-sm">A project includes many awesome features.</p>
    </div>
  )
}
