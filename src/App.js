import React, {useState, useEffect, useCallback } from "react";
import {GlobalStyle, AppStyle, Users, StatsDiv, Investors, AllDocs} from "./styles";
import Row from "./components/row"
import Header from "./components/header"
import styled from "styled-components"
import SortedRoles from "./components/sortedRoles"

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

function App() {

  var url = 'http://localhost:3000/test.json'
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [names, setNames] = useState()
  const [stats, setStats] = useState()
  const [sortedRoles, setSortedRoles] = useState()
  const [dislikes, setDislikes] = useState()


  const getData = useCallback(() => {

    fetch(url).then(res => res.json())
    .then(data => {
     setNames(data.docs)
      var all = Object.values(data.attributes)[8].cohorts["*ALL*"]
      setStats({users: all.globalUserCnt, investors: all.investorCnt})
      // all.globalUserCnt
      // all.investorCnt
      const allDocs = new Map(Object.entries(all.docStats))
      var mapAsc = new Map([...allDocs].sort(function(a,b){return a[1].greenToks - b[1].greenToks}
      ).reverse())
      setData(Array.from(mapAsc))

      let arrays = {
        a300: [],
        a276: [],
        a289: [],
        a246: [],
        a230: [],
        a241: [],
        a292: [],
        a293: [],
        a272: [],
        a234: [],
        a291: []
      }
      const arraysMap = new Map(Object.entries(arrays))
      const mappedArrays = Array.from(arraysMap)
   
      const MappedRoles = new Map(Object.entries(data.attributes))
      MappedRoles.forEach((value, key) => {
        //  console.log(value.cohorts)
        let mainGroup = key
         const MappedCohorts = new Map(Object.entries(value.cohorts))
        //  console.log(MappedCohorts)
         //mapped cohorts returns key: "VOCAA Partner" value: "docStats"
         MappedCohorts.forEach((value, key) => {
            const MappedIdeas = new Map(Object.entries(value.docStats))
            let groupsName = key // goverment, etc..

            MappedIdeas.forEach((value, key) => {
              key = "a" + key;
              var obj = {[key]: {mainGroup, groupsName, value}}
              mappedArrays.forEach(idea => {
                if(Object.values(idea)[0] === key){ 
                    var name = Object.values(idea)[0] // returns 230
                    arrays[name].push(obj) // pushed object to correct idea
                }
              })
            })
         })
     
         let groups = {
          chapterTitle: [],
          model: [],
          region: [],
          role: [],
          setting: [],
          size: [],
          title: [],
          type: []
        }

        const groupsMap = new Map(Object.entries(groups))
        const mappedGroups = Array.from(groupsMap)

         mappedArrays.forEach(a => {
            a[1].forEach(a => {
              mappedGroups.forEach(b => {
                if(Object.values(a)[0].mainGroup === b[0]){
                  groups[b[0]].push(a)
                  // a = object with docId as key, in value - role, value, and groups name.
                }
              })
            })
        })

        // from here and on, "groups" is filled with all the teams.
        setSortedRoles(mappedGroups)


          let dislikes = {
            a300: [],
            a276: [],
            a289: [],
            a246: [],
            a230: [],
            a241: [],
            a292: [],
            a293: [],
            a272: [],
            a234: [],
            a291: []
          }
          const dislikesMap = new Map(Object.entries(dislikes))
          const mappedDisplikes = Array.from(dislikesMap)

          mappedGroups.forEach(a => {
            Object.values(a)[1].forEach(b => {
              // console.log(Object.keys(b)[0]) // return a230
              const name = Object.values(b)[0].groupsName
              const vals = Object.values(b)[0].value
              if(vals.greenToks < vals.redToks){
                mappedDisplikes.forEach((idea => {
                  if(idea[0] === Object.keys(b)[0]){
                    dislikes[idea[0]].push({
                      [name]: {greenTokens: vals.greenToks, redToken: vals.redToks, 
                      mainGroup: Object.values(b)[0].mainGroup}
                    })
                  }
                }))
              }
            })
          })

        setDislikes(dislikes)

      }); 

      setLoading(false)

    })
  }, [url])
   

    useEffect(() => {
      getData()
    }, [getData])

    return (
    <AppStyle>
      <GlobalStyle/>
        <Header />
      {!loading && 
      <Div>
        <StatsDiv>
          <AllDocs>All Docs</AllDocs>
          <Users>Users: {stats.users}</Users>
          <Investors>Investors: {stats.investors}</Investors>
        </StatsDiv>
           {data.map((rowIdea,index) => {
                const dislikesMap = new Map(Object.entries(dislikes))
                const mappedDislikes = Array.from(dislikesMap)
                const dislikesProps = []
                mappedDislikes.forEach((idea) => {
                    if(idea[1].length > 0 && "a" + rowIdea[0] === idea[0]){
                      dislikesProps.push(idea)
                    }
                })
             return (
               <Row key={index} index={index} length={data.length} 
               object={Object.values(rowIdea)[1]} 
               projectName={names[rowIdea[0]].title} 
               projectId={rowIdea[0]} 
               dislikes={dislikesProps}
               />
             )
           })}
           <SortedRoles sortedRoles={sortedRoles}/>

      </Div>
      }
       

      </AppStyle>
  );
}

export default App;
