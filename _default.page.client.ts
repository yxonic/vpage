// import global styles here
import 'virtual:windi.css'

// load server pages on navigation by default
import { hydrate } from 'vpage/client'
hydrate()

// to setup client router globally, replace the above with:
// import { setupClientRouter } from 'vpage/router'
// setupClientRouter()
