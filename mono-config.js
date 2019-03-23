config = {
 	vfs_prefix: "managed",
 	deploy_prefix: "managed",
 	enable_debugging: 0,
 	file_list: [ "CSharpToPython.Web.dll","mscorlib.dll","System.Core.dll","System.dll","Mono.Security.dll","System.Xml.dll","System.Numerics.dll","System.ComponentModel.Composition.dll","System.Xml.Linq.dll","Microsoft.CodeAnalysis.dll","System.Runtime.dll","System.Collections.Immutable.dll","System.Collections.dll","System.Reflection.Metadata.dll","System.Runtime.Extensions.dll","System.Text.Encoding.CodePages.dll","CSharpToPython.Converter.dll","Microsoft.CodeAnalysis.CSharp.dll","WebAssembly.Bindings.dll", ],
	add_bindings: function() { Module.mono_bindings_init ("[WebAssembly.Bindings]WebAssembly.Runtime"); }
}
