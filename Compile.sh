# Caramel Framework Compiler
# By Toma678 for kurisubrooks

if [ -z "$1" ]
then
	echo "[*] Syntax Error - Usage:"
	echo "[*] Compiler.sh input.scss"
	exit
fi

if [[ $1 != *.scss ]]
then
	echo "[*] Incorrect File Type, Must be .SCSS"
else
	F2=${1%%.*}
	CMD1="sass --sourcemap=none --cache=none $1 $F2.css"
	CMD2="sass --sourcemap=none --cache=none $F2.css:$F2.min.css --style compressed"
	echo "[*] Compiling..."
	$CMD1
	echo "[*] Minifying..."
	$CMD2
	echo "[*] Done!"
fi
