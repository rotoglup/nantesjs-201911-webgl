// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  rotoglup: require("../assets/rotoglup_denyzor.png"),
  webgl_1986: require("../assets/webgl-1986.png"),
  webgl_browsers: require("../assets/webgl-browsers.png"),
  logo_opengl: require("../assets/logo-opengl.png"),
  logo_opengles: require("../assets/logo-opengles.png"),
  logo_webgl: require("../assets/logo-webgl.png"),
  opengl_desktop: require("../assets/opengl-desktop.png"),
  opengles_mobile: require("../assets/opengles-mobile.png"),
  example_architecture: require("../assets/example-architecture.png"),
  example_cedreo: require("../assets/example-cedreo.png"),
  example_claraio: require("../assets/example-claraio.png"),
  example_map: require("../assets/example-map.png"),
  example_graph: require("../assets/example-graph.png"),
  example_tensorflow: require("../assets/example-tensorflow.png"),
  example_terrain: require("../assets/example-terrain.png"),
  what_CPU_GPU: require("../assets/what-CPU-GPU.png"),
  what_GPU_multi_cores: require("../assets/what-gpu-multi-cores.jpg"),
  what_texturemapping: require("../assets/what-texturemapping.png"),
  what_triangles_machine: require("../assets/what-triangles-machine.png"),
  what_programmable: require("../assets/what-programmable.png"),
  api_typed_arrays: require("../assets/api-typed_arrays.png"),
  api_buffers: require("../assets/api-buffers.png"),
  webxr: require("../assets/webxr.jpg"),
};

preloader(images);

let theme = createTheme({
  primary: "#EEE",
  secondary: "#03A9FC", //"#1F2022",
  tertiary: "CECECE", //"",
  quartenary: "CECECE", //"#"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

export default class Presentation extends React.Component {
  render() {

    const slideProps = { transition: ["fade"] };
    const codeProps = { style: { fontSize: "1.4rem"} };

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            WebGL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            un décryptage en douceur
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={3} textColor="secondary">Nicolas Lelong</Heading>
          <Heading size={6}>@rotoglup</Heading>
          <Text>Expert freelance, création&nbsp;de&nbsp;logiciels&nbsp;3D,&nbsp;2D,&nbsp;SIG</Text>
          <Text>&nbsp;</Text>
          <CodePane {...codeProps} source='void hello(char const* world) { printf("Hello %s", world); }'></CodePane>
          <CodePane {...codeProps} source='def hello(world): print "Hello %s" % world'></CodePane>
          <CodePane {...codeProps} source='function hello(world) { console.log(`Hello ${world}`); }'></CodePane>
        </Slide>
        
        <Slide {...slideProps}>
          <Heading size={2}>WebGL - vaste&nbsp;sujet</Heading>
          <Text>Un tour d'horizon partial, pas un tuto</Text>
        </Slide>

        {/*
        <Slide>
          <Text>Thanks FIXME</Text>
          <Text>https://www.ntu.edu.sg/home/ehchua/programming/opengl/CG_BasicsTheory.html</Text>
          <Text>http://igm.univ-mlv.fr/~lnoel/index.php?section=teaching&teaching=opengl&teaching_section=tds&td=td4</Text>
          <Text>https://alain.xyz/blog/raw-webgl</Text>
        </Slide>
        */}

        { /******************************************************************************/ }
        { /******************************************************************************/ }
        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={2}>WebGL - ça&nbsp;fait&nbsp;quoi ?</Heading>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Communique avec le GPU</Heading>
          <Image src={images.what_CPU_GPU.replace('/', '')} width="90%"/>
          <Text>Asynchrone</Text>
          <Text>Mémoire dédiée</Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Communique avec le GPU</Heading>
          <Image src={images.what_GPU_multi_cores.replace('/', '')} width="60%"/>
          <Text>Single Instruction Multiple Threads (SIMT)</Text>
          <Text>1000+ threads</Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Abstraction d'un GPU</Heading>
          <Text>Afficher des triangles</Text>
          <Image src={images.what_triangles_machine.replace('/', '')} width="100%"/>
          <Text>...des lignes et des points parfois...</Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Abstraction d'un GPU</Heading>
          <Text>Triangles et textures</Text>
          <Image src={images.what_texturemapping.replace('/', '')} width="60%"/>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Et c'est tout ?</Heading>
          <Text>oui !</Text>
          <Image src={images.what_programmable.replace('/', '')} width="60%"/>
          <Text>mais c'est programmable !</Text>
          <Text>On peut être créatifs !</Text>
        </Slide>

        { /******************************************************************************/ }
        { /******************************************************************************/ }
        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={2}>WebGL - ça&nbsp;sert&nbsp;à&nbsp;quoi ?</Heading>
        </Slide>
  
        <Slide {...slideProps}>
          <Text>Afficher rapidement des images</Text>
          <Text textColor="tertiary">3D</Text>
          <Image src={images.example_terrain.replace('/', '')} width="80%"/>
        </Slide>
        <Slide {...slideProps}>
          <Text>Afficher rapidement des images</Text>
          <Text textColor="tertiary">3D</Text>
          <Image src={images.example_cedreo.replace('/', '')} width="80%"/>
        </Slide>
        <Slide {...slideProps}>
          <Text>Afficher rapidement des images</Text>
          <Text textColor="tertiary">3D</Text>
          <Image src={images.example_architecture.replace('/', '')} width="80%"/>
        </Slide>
  
        <Slide {...slideProps}>
          <Text>Afficher rapidement des images</Text>
          <Text textColor="tertiary">2D</Text>
          <Image src={images.example_map.replace('/', '')} width="60%"/>
        </Slide>
        <Slide {...slideProps}>
          <Text>Afficher rapidement des images</Text>
          <Text textColor="tertiary">2D</Text>
          <Image src={images.example_graph.replace('/', '')} width="60%"/>
        </Slide>

        <Slide {...slideProps}>
          <Text>Calculer rapidement des</Text>
          <Text textColor="tertiary">valeurs</Text>
          <Image src={images.example_tensorflow.replace('/', '')} width="60%"/>
          <Text>(Tensorflow)</Text>
        </Slide>

        { /******************************************************************************/ }
        { /******************************************************************************/ }
        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={2}>WebGL - ça&nbsp;vient&nbsp;d'où ?</Heading>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>L'histoire commence</Heading>
          <Appear><div>
            <Text>Dans les années 1980-1990</Text>
            <Image src={images.webgl_1986.replace('/', '')} width="40%"/>
          </div></Appear>
          <Appear><Text>IrisGL et autres API propriétaires</Text></Appear>
          <Appear><Text>1992 : OpenGL 1.0, par SGI</Text></Appear>
          <Notes>GL = Graphics Library</Notes>
        </Slide>

        <Slide {...slideProps}>
          <Image src={images.logo_opengl.replace('/', '')} width="40%"/>
          <Text>API multi-plateforme, multi-langage</Text>
          <Appear><Text>1992-2006 - OpenGL Architecture Review Board (ARB)</Text></Appear>
          <Appear><Text>2004 - Programmable, shaders, GLSL</Text></Appear>
          <Appear><Text>2006+ - consortium <em>Khronos</em> Group</Text></Appear>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>OpenGL</Heading>
          <Text>Desktop</Text>
          <Image src={images.opengl_desktop.replace('/', '')} width="80%"/>
          <Appear><Text>Windows, Apple, Linux</Text></Appear>
          <Appear><Text>Puissant, lourd, complexe</Text></Appear>
          <Notes>Drivers</Notes>
        </Slide>

        <Slide {...slideProps}>
          <Image src={images.logo_opengles.replace('/', '')} width="40%"/>
          <Text>Une version simplifiée</Text>
          <Text>Pour l'embarqué</Text>
          <Appear><Text>2007 - version 2.0</Text></Appear>
          <Appear><div>
            <Text>Pour les mobiles (iOS, Android, ...)</Text>
            <Image src={images.opengles_mobile.replace('/', '')} width="40%"/>
          </div></Appear>
          <Notes>Version 3.0 sans trop de succès</Notes>
        </Slide>

        <Slide {...slideProps}>
          <Image src={images.logo_webgl.replace('/', '')} width="40%"/>
          <Text>Portage pour les navigateurs</Text>
          <Appear><Text>2007-2011 - prototypage</Text></Appear>
          <Appear><Text>Accent sur la sécurité</Text></Appear>
          <Appear><Text>2011 - spécification 1.0</Text></Appear>
          <Appear><div>
            <Text>2014 - support généralisé</Text>
            <Image src={images.webgl_browsers.replace('/', '')} width="40%"/>
          </div></Appear>
          <Notes>les derniers : IE 11, Safari iOS</Notes>
        </Slide>

        { /******************************************************************************/ }
        { /******************************************************************************/ }
        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={2}>WebGL - ça&nbsp;ressemble à&nbsp;quoi&nbsp;?</Heading>
          <Heading size={5}>Du code, enfin...?</Heading>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Initialisation</Heading>
          <Text>A partir d'un <em>&lt;canvas&gt;</em></Text>
          <CodePane {...codeProps} lang="javascript" source={`const canvas = document.getElemenById('my_wannabe_webgl_canvas');

const webglConfig = { alpha: true, preserveDrawingBuffer: true };
const gl = canvas.getContext('webgl', webglConfig);
if (!gl) {
    // This rendering engine failed to start...
    throw new Error('WebGL failed to initialize.')
}`}/>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Boucle d'affichage</Heading>
          <CodePane {...codeProps} lang="javascript" source={`...
  // ➰ demande l'affichage pour la première suivante
  window.requestAnimationFrame(my_webgl_draw_code);
...
`}/>
          <br/>
          <CodePane {...codeProps} lang="javascript" source={`function my_webgl_draw_code(timestamp)
{
  const r=0.0, g=0.0, b=0.0, a=0.0;
  gl.clearColor(r,g,b,a);
  gl.clear(gl.COLOR_BUFFER_BIT);

  ...

  // ➰ demande l'affichage pour l'image suivante
  window.requestAnimationFrame(my_webgl_draw_code);
}
`}/>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Affichage</Heading>
          <CodePane {...codeProps} lang="javascript" source={`function my_webgl_draw_code(timestamp)
{
  ...
  setup_my_draw_state(gl);
  setup_my_glsl_program(gl);
  setup_my_program_inputs_and_textures(gl);
  setup_my_geometry_buffers_as_inputs(gl);
  // 🛆 Draw
  gl.drawElements(gl.TRIANGLES, 
      my_index_buffer_num_indices, 
      my_index_buffer_indices_type, 
      my_index_buffer_offset_in_bytes
    );
  ...
}
`}/>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Un triangle pour exemple</Heading>
          <Image src={images.api_buffers.replace('/', '')} width="100%"/>
        </Slide>

        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={2}>GLSL</Heading>
          <Text>GL Shading Language</Text>
          <Text>- dédié</Text>
          <Text>- typé</Text>
          <Text>- compilé</Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Vertex shader</Heading>
          <Text>n°1, pour chaque <em>sommet</em></Text>
          <CodePane {...codeProps} lang="javascript" source={`attribute vec3 inPosition;  // en provenance des buffers
attribute vec3 inColor;

varying vec3 vColor;        // sortie vers le fragment shader

void main()
{
    vColor = inColor;
    // position à utiliser pour l'affichage :
    gl_Position = vec4(inPosition, 1.0);
}`}/>
          <Text>mots clés <Code>attribute, varying, gl_Position</Code></Text>
        </Slide>
  
        <Slide {...slideProps}>
          <Heading size={4}>Fragment shader</Heading>
          <Text>n°2, pour chaque <em>pixel</em></Text>
          <CodePane {...codeProps} lang="javascript" source={`precision mediump float;    // qualité/performance (mobile)
varying vec3 vColor;        // dérivé du vertex shader

void main()
{
    // couleur à afficher :
    gl_FragColor = vec4(vColor, 1.0);
}`}/>
          <Text>mots clés <Code>varying, gl_FragColor</Code></Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Un compilateur embarqué</Heading>
          <CodePane {...codeProps} lang="javascript" source={`const vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, my_vertex_shader_source_code_string);
gl.compileShader(vs);

const fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, my_fragment_shader_source_code_string);
gl.compileShader(fs);

const my_program = gl.createProgram();
gl.attachShader(my_program, vs);
gl.attachShader(my_program, fs);
gl.linkProgram(my_program);

gl.deleteShader(vs);
gl.deleteShader(fs);
`}/>
          <Text>Et les erreurs de compilation ?</Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Un compilateur embarqué</Heading>
          <Text>Consultation 'manuelle' des erreurs</Text>
          <CodePane {...codeProps} lang="javascript" source={`const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
if (!status) {
  throw "could not compile shader:" + gl.getShaderInfoLog(shader);
}
...
const status = gl.getProgramParameter(program, gl.LINK_STATUS);
if (!status) {
  throw gl.getProgramInfoLog(program);
}
`}/>
          <Text>Ce code provoque des fuites de mémoire 📈</Text>
        </Slide>

        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={2}>Données</Heading>
          <Heading size={4}>Des <em>Buffers</em></Heading>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Bas niveau</Heading>
          <Text>Données binaires, via des <em>TypedArray</em></Text>
          <Code>Uint16Array, Float32Array, ...</Code>
          <Image src={images.api_typed_arrays.replace('/', '')} width="90%"/>
          <Text>Gestion manuelle de la mémoire</Text>
          <Text><em>Libérer !</em></Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Nos données</Heading>
          <Text>Un triangle, 3 <em>buffers</em></Text>
          <Image src={images.api_buffers.replace('/', '')} width="80%"/>
          <Text>Les données aux sommets + les index</Text>
        </Slide>
        
        <Slide {...slideProps}>
          <Heading size={4}>Nos données</Heading>
          <Text>Un triangle, 3 <em>buffers</em></Text>
          <CodePane {...codeProps} lang="javascript" source={`const indices = new Uint16Array([ 0, 1, 2 ]);
const positions= new Float32Array([
  1.0,  1.0,  0.0,
 -1.0,  1.0,  0.0,
  0.0, -1.0,  0.0 ]);
const colors = new Float32Array(...)

const positionVBO = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionVBO);
gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

...

const IBO = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, IBO);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
`}/>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Libérez !</Heading>
          <Text>Sinon... prévoir des ennuis 📈</Text>
          <CodePane {...codeProps} lang="javascript" source={`...
gl.deleteBuffer(positionVBO);
gl.deleteBuffer(colorVBO);
gl.deleteBuffer(ibo);
`}/>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Utiliser les données</Heading>
          <Text>Attention, verbeux</Text>
          <CodePane {...codeProps} lang="javascript" source={`// lié à la déclaration GLSL 'attribute vec3 inPosition;'
// lié à la définition js 'const positions = new Float32Array(...)'
const positionLoc = gl.getAttribLocation(my_program, "inPosition");

gl.bindBuffer(gl.ARRAY_BUFFER, positionVBO);
gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(positionLoc);

gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO);
...
`}/>
          <Text>Performance ? disableVertexAttribArray ?</Text>
        </Slide>

        { /******************************************************************************/ }

        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={2}>...</Heading>
          <Heading size={4}>Il vient ce triangle ?!</Heading>
          <Text>Non...</Text>
        </Slide>

        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={4}>API WebGL 'de base'</Heading>
          <Appear><div>
            <Text>- Hérite des défauts de OpenGL</Text>
            <Text>&nbsp;</Text>
          </div></Appear>
          <Appear><Text>- Complexe</Text></Appear>
          <Appear><Text>à développer (gestion des états)</Text></Appear>
          <Appear><Text>à débugger (erreurs silencieuses)</Text></Appear>
          <Appear><div>
            <Text>&nbsp;</Text>
            <Text>- Pas Javascript friendly</Text>
          </div></Appear>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>API WebGL 'de base'</Heading>
          <Heading size={2}>Ne pas l'utiliser directement</Heading>
          <Text>Encapsuler, ou utiliser une librairie</Text>
        </Slide>

        { /******************************************************************************/ }
        { /******************************************************************************/ }
        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={4}>Encapsulation</Heading>
          <Text>Un exemple de lib, <Code>picogl</Code></Text>
          <CodePane {...codeProps} lang="javascript" source={`let app = PicoGL.createApp(canvas)
app
  .createPrograms([vertexShaderSource, fragmentShaderSource])
  .then(([program]) => {

    let positions = app.createVertexBuffer(
        PicoGL.FLOAT, 3, new Float32Array([...])
      );
    let vertexArray = app.createVertexArray()
      .vertexAttributeBuffer(0, positions);
    ...
    let drawCall = app.createDrawCall(program, vertexArray);

    app.clear()
    drawCall.draw();
});
`}/>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Encapsulation</Heading>
          <Text>Un exemple de lib, <Code>regl</Code></Text>
          <CodePane {...codeProps} lang="javascript" source={`let drawCall = regl({
  frag: fragmentShaderSource,
  vert: vertexShaderSource,
  attributes: {
    position: [ [-1, 0], [0, -1], [1, 1] ]
  },
  count: 3
});

drawCall();
`}/>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Librairies</Heading>
          <List>
            <ListItem>ThreeJS</ListItem>
            <ListItem>BabylonJS</ListItem>
          </List>
          <Text>Libs leader pour le rendu 3D</Text>
          <Text>Communauté, exemples, tutos</Text>
        </Slide>
    
        { /******************************************************************************/ }
        { /******************************************************************************/ }
        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={2}>Ecosystème ?</Heading>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>Contenus, données</Heading>
          <Text>Volet important pour une app</Text>
          <Text>A connaître, par le consortium <em>Khronos</em> :</Text>
          <List>
            <Appear><ListItem>GLTF, pour la géométrie</ListItem></Appear>
            <Appear><ListItem>Basis, pour les textures</ListItem></Appear>
            <Appear><ListItem>Working group '3D commerce'</ListItem></Appear>
          </List>
        </Slide>
    
        { /******************************************************************************/ }
        { /******************************************************************************/ }
        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={2}>D'autres API ?</Heading>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>WebGL 2</Heading>
          <Text>Spécifié depuis 2017</Text>
          <Text>Mort né ?</Text>
          <Text>Pas de support sur Apple ou Microsoft</Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>WebGPU</Heading>
          <Text>WIP, proposée par Apple</Text>
          <Text>API plus saine, basée sur <em>Metal</em></Text>
          <Text><em>Compute</em> shaders</Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={4}>WebXR</Heading>
          <Text>Remplace <em>WebVR</em></Text>
          <Image src={images.webxr.replace('/', '')} width="60%"/>
          <Text>XR = VR + AR</Text>
          <Text>Permet l'accès aux périphériques</Text>
          <Text>Emulateur</Text>
        </Slide>

        { /******************************************************************************/ }
        { /******************************************************************************/ }
        { /******************************************************************************/ }

        <Slide {...slideProps}>
          <Heading size={4}>En résumé</Heading>
          <Text>- Plateforme puissante</Text>
          <Text>- Langage dédié (GLSL),</Text>
          <Text>- API datée, complexe,</Text>
          <Text>destinée aux dev 3D</Text>
          <Text><em>mais</em></Text>
          <Text>des alternatives</Text>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={2}>Merci !</Heading>
          <Heading size={4}>Des questions ?</Heading>
          <Heading size={4}>Des commentaires ?</Heading>
          <Text>Un meetup dédié ?</Text>
          <Text>&nbsp;</Text>
          <Text>Nicolas Lelong - @rotoglup</Text>
        </Slide>

        { /******************************************************************************/ }
        { /******************************************************************************/ }
        { /******************************************************************************/ }

  { /******************************************************************************/ }
      
      </Deck>
    );
  }
}
