<script>
  MathJax = {
    loader: {
      load: [
        'input/tex-base',    
         'output/svg',       
         'ui/menu',        
         '[tex]/require'
      ]
    },
    tex: {
    packages: ['base'],        // extensions to use
    inlineMath: [              // start/end delimiter pairs for in-line math
      ['\\(', '\\)']
    ],
    displayMath: [             // start/end delimiter pairs for display math
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    processEscapes: true,      // use \$ to produce a literal dollar sign
    processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
    processRefs: true,         // process \ref{...} outside of math mode
    digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
                               // pattern for recognizing numbers
    tags: 'none',              // or 'ams' or 'all'
    tagSide: 'right',          // side for \tag macros
    tagIndent: '0.8em',        // amount to indent tags
    useLabelIds: true,         // use label name rather than tag for ids
    multlineWidth: '85%',      // width of multline environment
    maxMacros: 1000,           // maximum number of macro substitutions per expression
    maxBuffer: 5 * 1024,       // maximum size for the internal TeX string (5K)
    formatError:               // function called when TeX syntax errors occur
        (jax, err) => jax.formatError(err)
  },mml: {
    parseAs: 'html',                     // or 'xml'
    forceReparse: false,                 // true to serialize and re-parse all MathML
    parseError: function (node) {        // function to process parsing errors
      this.error(this.adaptor.textContent(node).replace(/\n.*/g, ''));
    },
    verify: {                            // parameters controling verification of MathML
      checkArity: true,                  //   check if number of children is correct
      checkAttributes: false,            //   check if attribute names are valid
      fullErrors: false,                 //   display full error messages or just error node
      fixMmultiscripts: true,            //   fix unbalanced mmultiscripts
      fixMtables: true                   //   fix incorrect nesting in mtables
    }
  },
    startup: {
    ready: () => {
      console.log('MathJax is loaded, but not yet initialized');
      MathJax.startup.defaultReady();
      console.log('MathJax is initialized, and the initial typeset is queued');
    }
  }

  };
  </script>  
<script type="text/javascript" id="MathJax-script" async
src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>