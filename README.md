npm install env-cmd --save-dev

npm run build:prod

and in package.json insied script

next
"build:prod":"env-cmd -f .env.prod next build"
vite
"build:prod":"vite build --mode prod"
CRA
"build:prod":"env-cmd -f .env.prod react-scripts build"


.env.prod
NEXT_PUBLIC_somedata="someData"
VITE_somedata="someData"
somedata="someData"
REACT_APP_somedata="someData"

use
process.env.NEXT_PUBLIC_somedata
import.meta.env.VITE_somedata
process.env.somedata
process.env.REACT_APP_somedata