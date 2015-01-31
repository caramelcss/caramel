#SASS compiler.
#Written by Toma678.
if [ -z "$1" ]
then
	echo "[*] Input filenme not supplied... Exiting."
	exit
elif [ -z "$2" ]
then
	echo "[*] Output filename not supplied... Exiting."
	exit
fi

if [[ $1 != *.scss ]]
then
	echo "[*] Incorrect file extension on supplied input filename... Exiting."
elif [[ $2 != *.css ]]
then
	echo "[*] Incorrect file extension on supplied output filename... Exiting."
else
CMD="sass $1 $2"
echo "[*] Compiling $1 into $2."
$CMD
exit
fi
