import {
  ATTACH_SYMBOL,
  DETACH_SYMBOL,
  INIT_SYMBOL,
}                     from './constants'
import { SidecarBody } from './sidecar-body'

function attach (
  sidecar: SidecarBody,
): Promise<void> {
  return sidecar[ATTACH_SYMBOL]()
}

function detach (
  sidecar: SidecarBody,
): Promise<void> {
  return sidecar[DETACH_SYMBOL]()
}

function init (
  sidecar: SidecarBody,
): Promise<void> {
  return sidecar[INIT_SYMBOL]()
}

export {
  attach,
  detach,
  init,
}
