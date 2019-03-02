% hello world program
-module(seedRiak). 
-export([for/2,start/0]). 

for(0,_) -> 
   []; 
   

  for(N,Term) when N > 0 -> 
   X = integer_to_list(N),
   Y = unicode:characters_to_list(["./jsonData/file", X, ".json"], latin1),
   io:fwrite("~p~n", [Y]), 
  [Term|for(N-1,Term)]. 

start() -> 
  for(10, 1).


%{ok, File} = file:open("./jsonData/fileN.json", [read]),
%Txt = file:file_read(File), 
%io:fwrite("~p~n",[Txt]).