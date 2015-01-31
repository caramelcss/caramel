# SASS compiler.
# Written by Toma678.
if [ -z "$1" ]
then
	echo "[*] Input file not supplied... Cancelling."
	exit
elif [ -z "$2" ]
then
	echo "[*] Output file not supplied... Cancelling."
	exit
fi

if [[ $1 != *.scss ]]
then
	echo "[*] Incorrect file extension on supplied input... Cancelling."
elif [[ $2 != *.css ]]
then
	echo "[*] Incorrect file extension on supplied output... Cancelling."
else
CMD="sass $1 $2"
echo "[*] Compiling $1 into $2."
$CMD
exit
fi
