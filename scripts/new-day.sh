#!/usr/bin/env bash

day=$1 # should just be an int

cp challenges/dayX.template.ts challenges/day${day}.ts

cat challenges/dayX.template.spec.ts | sed 's/{{day}}/'${day}'/g' > challenges/day${day}.spec.ts
