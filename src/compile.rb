# Caramel — Sass Compiling Script
# Created by toma678, kurisubrooks & joshhartigan

puts ("[*] Caramel Sass Compiler")
puts ("[*] Syntax: 'ruby path/to/compile.rb path/to/caramel.scss'")
puts ("")

file = ARGV[0]

begin
	if File.extname(file)==".scss"
 
		else
			puts  ("[!] ERROR: Incorrect File Format, must be .scss!")
			abort ("[-] Usage: 'ruby path/to/compile.rb path/to/caramel.scss'")
		end
 
	rescue TypeError
		puts ("[!] ERROR: File Missing. You didn't include a file!")
		puts ("[-] Please enter the file path:")
		file = gets.chomp
		puts ("")
		if File.extname(file)==".scss"

		else
			puts  ("[!] ERROR: Incorrect File Format, must be .scss!")
			puts  ("[-] Make sure there's no space after 'file.scss'")
			abort ("[-] Usage: 'ruby path/to/compile.rb path/to/caramel.scss'")
		end
	end

out = file.split(".").first
sass1 = "sass --sourcemap=none --cache=/tmp/sass "+file.to_s+" "+out.to_s+".css"
sass2 = "sass --sourcemap=none --cache=/tmp/sass "+file.to_s+" "+out.to_s+".min.css --style compressed"
 
puts ("[*] Compiling > .css")
system sass1
 
puts ("[*] Minifying > .min.css")
system sass2
 
puts ("[*] Done! Press Return to end the script.")
ending = gets