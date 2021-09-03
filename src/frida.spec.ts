#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test }       from 'tstest'
import { expectType } from 'tsd'

import type {
  ScriptMessageHandler,
  NativeType,
  PointerType,
}                           from './frida.js'
import {
  normalizeFunctionTarget,
  TargetPayloadObj,
  TargetPayloadRaw,
}                           from './function-target.js'

test('PointerType typing', async t => {
  type EXPECTED_TYPE = 'Pointer' | 'Int' | 'Utf8String'
  type T = Extract<PointerType, EXPECTED_TYPE>
  const type: T = {} as any
  expectType<EXPECTED_TYPE>(type)
  t.pass('PointerType should be typing right')
})

test('NativeType typing', async t => {
  type EXPECTED_TYPE = 'void' | 'pointer' | 'int'
  type T = Extract<NativeType, EXPECTED_TYPE>
  const type: T = '' as any
  expectType<EXPECTED_TYPE>(type)
  t.pass('NativeType should be typing right')
})

test('TargetType typing', async t => {
  const type: TargetPayloadRaw = '' as any
  expectType<number | string>(type)
  t.pass('TargetType should be typing right')
})

test('ScriptMessageHandler typing', async t => {
  const handler: Parameters<ScriptMessageHandler>[1] = {} as any
  expectType<Buffer | null>(handler)
  t.pass('ScriptMessageHandler should be typing right')
})

test('normalizeFunctionTarget()', async t => {
  const TEST_LIST: [
    TargetPayloadRaw,
    TargetPayloadObj,
  ][] = [
    [
      'stringTarget',
      { funcName: 'stringTarget', type: 'agent' },
    ],
    [
      0x42,
      { address: '0x42', moduleName: null, type: 'address' },
    ],
  ]

  const result    = TEST_LIST.map(pair => pair[0]).map(normalizeFunctionTarget)
  const expected  = TEST_LIST.map(pair => pair[1])

  t.same(result, expected, 'should normalize function target as expected')
})
