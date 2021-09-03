/**
 *   Sidecar - https://github.com/huan/sidecar
 *
 *   @copyright 2021 Huan LI (李卓桓) <https://github.com/huan>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
import {
  Sidecar,
  SidecarBody,
  Call,
  Hook,
  ParamType,
  RetType,
  Ret,
}                   from '../../src/mod.js'

import {
  targetAddress,
  targetProgram,
}                   from './sidecar-config.js'

@Sidecar([
  targetProgram(), // chatbox-linux
])
class ChatboxSidecarPro extends SidecarBody {

  @Call(targetAddress('mo'))
  @RetType('int')
  mo (
    @ParamType('pointer', 'Utf8String') content: string,
  ): Promise<number> { return Ret(content) }

  @Hook(targetAddress('mt'))
  mt (
    @ParamType('pointer', 'Utf8String') content: string,
  ) { return Ret(content) }

}

export { ChatboxSidecarPro }
