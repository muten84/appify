  Set fso = CreateObject("Scripting.FileSystemObject")
  sFolder = "c:\esel\terminal\logs"
  Set folder = fso.GetFolder(sFolder)
  Set files = folder.Files
  Date1=Now()
  For each folderIdx In files 	
	diff = DateDiff("d",folderIdx.DateCreated,Date1)
	If diff > 7 Then
	    fso.DeleteFile sFolder&"\"&folderIdx.Name		
	End If
  Next
  