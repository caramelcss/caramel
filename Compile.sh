# SASS compiler.
# Written by Toma678.
if [ -z "$1" ]
then
	echo "[*] Input file not supplied... Cancelling."
	exit
fi

if [[ $1 != *.scss ]]
then
	echo "[*] Incorrect file extension on supplied input... Cancelling."
else
	CMD1="sass $1"
	F2=${1%%.*}
	CMD2="sass $F2.css:$F2.min.css --style compressed --scss"
	echo "[*] Compiling $1 into $F2.css."
	$CMD1
	echo "[*] Creating compressed file."
	$CMD2
fi
