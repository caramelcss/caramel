if ARGV.length == 0
  puts '[*] Syntax Error - Usage:'
  puts '[*] compile.rb input.scss'
  exit
end

if not ARGV[0].end_with? '.scss'
  puts '[*] Incorrect File Type, Must be .scss'
  exit
end

out_filename = ARGV[0].gsub('.scss', '.css')
min_filename = ARGV[0].gsub('.scss', '.min.css')

puts '[*] Compiling...'
system "sass --sourcemap=none --cache=none #{ARGV[0]} #{out_filename}"

puts '[*] Minifying...'
system "sass --sourcemap=none --cache=none #{ARGV[0]} #{min_filename}" +
       " --style compressed"

puts '[*] Done!'
