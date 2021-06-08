initSidebarItems({"enum":[["ExpandError",""],["FragmentKind",""],["MacroCallKind",""],["MacroDefKind",""],["Origin",""]],"fn":[["to_fragment_kind","Given a `MacroCallId`, return what `FragmentKind` it belongs to. FIXME: Not completed"]],"macro":[["name",""],["quote","FIXME: It probably should implement in proc-macro"]],"mod":[["ast_id_map","`AstIdMap` allows to create stable IDs for “large” syntax nodes like items and macro calls."],["builtin_derive","Builtin derives."],["builtin_macro","Builtin macro"],["db","Defines database & queries for macro expansion."],["eager","Eager expansion related utils"],["hygiene","This modules handles hygiene information."],["name","See [`Name`]."],["proc_macro","Proc Macro Expander stub"],["quote","A simplified version of quote-crate like quasi quote macro"]],"struct":[["ExpandResult",""],["ExpansionInfo","ExpansionInfo mainly describes how to map text range between src and expanded macro"],["HirFileId","Input to the analyzer is a set of files, where each file is identified by `FileId` and contains source code. However, another source of source code in Rust are macros: each macro can be thought of as producing a “temporary file”. To assign an id to such a file, we use the id of the macro call that produced the file. So, a `HirFileId` is either a `FileId` (source code written by user), or a `MacroCallId` (source code produced by macro)."],["InFile","`InFile<T>` stores a value of `T` inside a particular file/syntax tree."],["MacroCallId","`MacroCallId` identifies a particular macro invocation, like `println!(\"Hello, {}\", world)`."],["MacroCallLoc",""],["MacroDefId",""],["MacroFile",""]],"type":[["AstId","`AstId` points to an AST node in any file."]]});