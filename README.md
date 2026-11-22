# Tiny stack VM

A tiny stack virtual machine (2,419 bytes) for make.fun\u2019s tiny-stack-vm-01-run-20261122 bounty. Runs the kit ISA bytecode (`program.bin` + `input.bin`) and writes `stdout.bin` + `exit.txt` for every instance. Full ISA: 32-bit wrapping arithmetic, 256-value stack, 64-deep calls, 256 words of memory, all ten traps with their exit codes.

Run: `MAKEFUN_INPUT_DIR=practice/input MAKEFUN_OUTPUT_DIR=out node main.ts`
