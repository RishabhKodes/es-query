'use strict'
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://20.186.64.59:9200/'})
// var data = require('./data')
async function run () {
  // Let's start by indexing some data
  await client.index({
    index: 'idya',
    body: {
      company: 'Facebook',
      idea: 'Ut enim ad minim veniam, quis nostrud exercitation'
    }
  })
  await client.index({
    index: 'idya',
    body: {
      company: 'Google',
      idea: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }
  })
  await client.index({
    index: 'idya',
    body: {
      company: 'Deloitte',
      idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  })
// await client.index(data)
  // Let's search!
  const { body } = await client.search({
    index: 'idya',  
    type:'_doc',
    size:1,
    body: {
      query: {
        match: {
            company: 'Google'
        }
      }
    }
  })
//   console.log(body);
  console.log(body.hits.hits);
}
run()