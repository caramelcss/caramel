# Caramel Framework Compiler
# Written by Toma678

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
	CMD1="sass $1 $F2.css"
	CMD2="sass $F2.css:$F2.min.css --style compressed --scss"
	echo "[*] Compiling..."
	$CMD1
	echo "[*] Minifying..."
	$CMD2
	echo "[*] Done!"
fi
