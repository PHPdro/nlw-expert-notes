import logo from './assets/logo-nlw-expert.svg'
import { NoteCard } from './components/note-card'

export function App() {

  return (

    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} />

      <form className="w-full">
        <input 
          type="text" 
          placeholder="Busque em suas notas..." 
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"/>
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p>
        </div>

      {/* {bilau = 0 ? sdf : dfsf } */}

      <NoteCard dia="2"/>
      <NoteCard dia="4"/>
      <NoteCard dia="32423"/>
      <NoteCard />
      <NoteCard />
      
      </div>
    </div>

  )
}
