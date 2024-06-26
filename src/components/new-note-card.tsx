import * as Dialog from '@radix-ui/react-dialog'
// import { formatDistanceToNow } from 'date-fns'
// import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

export function NewNoteCard() {
    return (
      <Dialog.Root>
        <Dialog.Trigger className="rounded-md text-left flex flex-col bg-slate-700 p-5 gap-3 overflow-hidden relative outline-none">
          <div className="rounded-md bg-slate-700 p-5 space-y-3">
            <span className="text-sm font-medium text-slate-200">
              Adicionar nota
            </span>
            <p className="text-sm leading-6 text-slate-400">
              Grave uma nota em áudio que será convertida para texto automaticamente.
            </p>
          </div>
        </Dialog.Trigger>

        <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50">
          <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
            <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
              <X className="size-5"/>
            </Dialog.Close>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                VINI É GAY
              </span>
              <p className="text-sm leading-6 text-slate-400">
                GAAAAAAAAAAAAAAAAAAY
              </p>
            </div>

            <button type="button" className="w-full bg-slate-800 py-4 text-center text-small text-slate-300 outline-none font-medium group">
              Deseja <span className="text-red-400 group-hover:underline">apagar esta nota?</span>
            </button>
          </Dialog.Content>
        </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    )
}
