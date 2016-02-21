# Panjara

Give your modules a memory by safely assigning globals scoped to a module ID.

## Usage
```javascript
import remember from "panjara";
const memory = remember(module, {
  wasRunBefore: false
  // ...
})
if (!memory.wasRunBefore) {
  memory.wasRunBefore = true;
}
```
