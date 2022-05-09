// const test = useCallback(() => {
//     fetch(url).then(res => res.json())
//     .then(data => {
//       // dont forget to create an array creator by docID
//       // const MappedProjectIds = new Map(Object.entries(data.docs))
//       //   MappedProjectIds.forEach((value, key) => {
//       //     var id = []  
//       //     return id [key] = []
//       //   })
      
      
//       let a230 = []
   
//       const MappedRoles = new Map(Object.entries(data.attributes))
//       MappedRoles.forEach((value, key) => {
//         //  console.log(value.cohorts)
//         let mainGroup = key
//          const MappedCohorts = new Map(Object.entries(value.cohorts))
//         //  console.log(MappedCohorts)
//          //mapped cohorts returns key: "VOCAA Partner" value: "docStats"
//          MappedCohorts.forEach((value, key) => {
//             const MappedIdeas = new Map(Object.entries(value.docStats))
//             let groupsName = key // goverment, etc..

//             MappedIdeas.forEach((value, key) => {
//               var obj = {[key]: {mainGroup, groupsName, value}}
//               if(key === "230"){a230.push(obj)}
//             })
//          })
//         // console.log(a230)

//          let region = []

//         a230.forEach(a => {
//             if(Object.values(a)[0].mainGroup === "region"){region.push(a)}
//         })
        
//           let regionResults = []
//           region.forEach(a => {
        
//           if(Object.values(a)[0].value.greenToks >= Object.values(a)[0].value.redToks){
//             const name = Object.values(a)[0].groupsName
//             regionResults.push({[name]: true, idea: Object.keys(a)[0]})
//           } else {
//             const name = Object.values(a)[0].groupsName
//             regionResults.push({[name]: false, idea: Object.keys(a)[0]})
//           }
//         })

//         let regionHates = []

//         regionResults.forEach(a => {
//           if(Object.values(a)[0] === false){
//             regionHates.push({result: Object.keys(a)[0], idea: a.idea})
//           }
//         })
      
//         setHaters(regionHates)

//       }); 
//     })

//   }, [url])