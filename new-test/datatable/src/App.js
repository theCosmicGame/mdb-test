import logo from './logo.svg';
import styled from 'styled-components';
import './App.css'
import './assets/css/mdb.css';

import React, { useState } from 'react';
import { MDBDatatable } from 'mdb-react-ui-kit';

const columns = [
      {
          label: "Name",
          field: "name"
      },
      {
          label: "Email",
          field: "email"
      },
      {
          label: "role",
          field: "role"
      },
      {
          label: "Actions",
          field: "buttons",
          sort: false
      }
  ]
const rows = [
  {
      id: 1,
      name: "Jennifer Doe",
      emailraw: "jennifer.doe@rockequity.com",
      firmId: 1,
      firms: [
          1
      ],
      isExternalFirm: false,
      isExternalComp: true,
      adminRoles: [
          1,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      collaboratorRoles: [
          2
      ],
      viewerRoles: [
          3
      ],
      firmAdmin: false,
      companies: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      permissions: {
          1: {
              users: "edit",
              data: "full",
              details: "edit"
          },
          2: {
              users: "view",
              data: "full",
              details: "edit"
          },
          3: {
              users: "view",
              data: "view",
              details: "view"
          },
          4: {
              users: "edit",
              data: "full",
              details: "edit"
          },
          5: {
              users: "edit",
              data: "full",
              details: "edit"
          },
          6: {
              users: "edit",
              data: "full",
              details: "edit"
          },
          7: {
              users: "edit",
              data: "full",
              details: "edit"
          },
          8: {
              users: "edit",
              data: "full",
              details: "edit"
          },
          9: {
              users: "edit",
              data: "full",
              details: "edit"
          },
          10: {
              users: "edit",
              data: "full",
              details: "edit"
          }
      },
      roles: {
          admin: [
              1,
              4,
              5,
              6,
              7,
              8,
              9,
              10
          ],
          collaborator: [
              2
          ],
          viewer: [
              3
          ]
      },
      role: "Admin"
  },
  {
      id: 2,
      name: "Ryan Tse",
      emailraw: "ryan.tse@rockequity.com",
      firmId: 1,
      firms: [
          1
      ],
      isExternalFirm: false,
      isExternalComp: true,
      adminRoles: [
          2
      ],
      collaboratorRoles: [
          1,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      viewerRoles: [],
      firmAdmin: false,
      companies: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      permissions: {
          1: {
              users: "view",
              data: "full",
              details: "edit"
          },
          2: {
              users: "edit",
              data: "full",
              details: "edit"
          },
          3: {
              users: "view",
              data: "full",
              details: "edit"
          },
          4: {
              users: "view",
              data: "full",
              details: "edit"
          },
          5: {
              users: "view",
              data: "full",
              details: "edit"
          },
          6: {
              users: "view",
              data: "full",
              details: "edit"
          },
          7: {
              users: "view",
              data: "full",
              details: "edit"
          },
          8: {
              users: "view",
              data: "full",
              details: "edit"
          },
          9: {
              users: "view",
              data: "full",
              details: "edit"
          },
          10: {
              users: "view",
              data: "full",
              details: "edit"
          }
      },
      roles: {
          admin: [
              2
          ],
          collaborator: [
              1,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10
          ],
          viewer: []
      },
      role: "Collaborator"
  },
  {
      id: 3,
      name: "Jane Rach",
      emailraw: "jane.rach@rockequity.com",
      firmId: 1,
      firms: [
          1
      ],
      isExternalFirm: false,
      isExternalComp: true,
      adminRoles: [
          3
      ],
      collaboratorRoles: [],
      viewerRoles: [
          1,
          2,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      firmAdmin: false,
      companies: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      permissions: {
          1: {
              users: "view",
              data: "view",
              details: "view"
          },
          2: {
              users: "view",
              data: "view",
              details: "view"
          },
          3: {
              users: "edit",
              data: "full",
              details: "edit"
          },
          4: {
              users: "view",
              data: "view",
              details: "view"
          },
          5: {
              users: "view",
              data: "view",
              details: "view"
          },
          6: {
              users: "view",
              data: "view",
              details: "view"
          },
          7: {
              users: "view",
              data: "view",
              details: "view"
          },
          8: {
              users: "view",
              data: "view",
              details: "view"
          },
          9: {
              users: "view",
              data: "view",
              details: "view"
          },
          10: {
              users: "view",
              data: "view",
              details: "view"
          }
      },
      roles: {
          admin: [
              3
          ],
          collaborator: [],
          viewer: [
              1,
              2,
              4,
              5,
              6,
              7,
              8,
              9,
              10
          ]
      },
      role: "User"
  },
  {
      id: 4,
      name: "Eric Eay",
      emailraw: "eric@cpa-QofE.com",
      firmId: 1,
      firms: [
          1
      ],
      isExternalFirm: true,
      isExternalComp: true,
      adminRoles: [],
      collaboratorRoles: [],
      viewerRoles: [
          1,
          2,
          3
      ],
      firmAdmin: false,
      companies: [
          1,
          2,
          3
      ],
      permissions: {
          1: {
              users: "view",
              data: "view",
              details: "view"
          },
          2: {
              users: "view",
              data: "view",
              details: "view"
          },
          3: {
              users: "view",
              data: "view",
              details: "view"
          }
      },
      roles: {
          admin: [],
          collaborator: [],
          viewer: [
              1,
              2,
              3
          ]
      },
      role: "External User"
  },
  {
      id: 5,
      name: "Jack Plence",
      emailraw: "jack@fastserv.com",
      firmId: 1,
      firms: [
          1
      ],
      isExternalFirm: true,
      isExternalComp: false,
      adminRoles: [],
      collaboratorRoles: [
          1
      ],
      viewerRoles: [
          1
      ],
      firmAdmin: false,
      companies: [
          1
      ],
      permissions: {
          1: {
              users: "view",
              data: "view",
              details: "view"
          }
      },
      roles: {
          admin: [],
          collaborator: [
              1
          ],
          viewer: [
              null
          ]
      },
      role: "Collaborator"
  },
  {
      id: 6,
      name: "Tiger Nixon",
      emailraw: "tiger.nixon@gmail.com",
      firmId: 1,
      firms: [
          1
      ],
      isExternalFirm: true,
      isExternalComp: true,
      adminRoles: [],
      collaboratorRoles: [
          2,
          3,
          4
      ],
      viewerRoles: [
          1,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      firmAdmin: false,
      companies: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      permissions: {
          1: {
              users: "view",
              data: "view",
              details: "view"
          },
          2: {
              users: "view",
              data: "full",
              details: "edit"
          },
          3: {
              users: "view",
              data: "full",
              details: "edit"
          },
          4: {
              users: "view",
              data: "full",
              details: "edit"
          },
          5: {
              users: "view",
              data: "view",
              details: "view"
          },
          6: {
              users: "view",
              data: "view",
              details: "view"
          },
          7: {
              users: "view",
              data: "view",
              details: "view"
          },
          8: {
              users: "view",
              data: "view",
              details: "view"
          },
          9: {
              users: "view",
              data: "view",
              details: "view"
          },
          10: {
              users: "view",
              data: "view",
              details: "view"
          }
      },
      roles: {
          admin: [],
          collaborator: [
              2,
              3,
              4
          ],
          viewer: [
              1,
              5,
              6,
              7,
              8,
              9,
              10
          ]
      },
      role: "External User"
  },
  {
      id: 7,
      name: "Sonya Frost",
      emailraw: "sfrost@gmail.com",
      firmId: 1,
      firms: [
          1,
          2
      ],
      isExternalFirm: true,
      isExternalComp: true,
      adminRoles: [],
      collaboratorRoles: [],
      viewerRoles: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      firmAdmin: false,
      companies: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      permissions: {
          1: {
              users: "view",
              data: "view",
              details: "view"
          },
          2: {
              users: "view",
              data: "view",
              details: "view"
          },
          3: {
              users: "view",
              data: "view",
              details: "view"
          },
          4: {
              users: "view",
              data: "view",
              details: "view"
          },
          5: {
              users: "view",
              data: "view",
              details: "view"
          },
          6: {
              users: "view",
              data: "view",
              details: "view"
          },
          7: {
              users: "view",
              data: "view",
              details: "view"
          },
          8: {
              users: "view",
              data: "view",
              details: "view"
          },
          9: {
              users: "view",
              data: "view",
              details: "view"
          },
          10: {
              users: "view",
              data: "view",
              details: "view"
          }
      },
      roles: {
          admin: [],
          collaborator: [],
          viewer: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10
          ]
      },
      role: "External User"
  },
  {
      id: 8,
      name: "Tatyana Fitzpatrick",
      emailraw: "tfitz@gmail.com",
      firmId: 1,
      firms: [
          1,
          2,
          3
      ],
      isExternalFirm: true,
      isExternalComp: true,
      adminRoles: [],
      collaboratorRoles: [],
      viewerRoles: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      firmAdmin: false,
      companies: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
      ],
      permissions: {
          1: {
              users: "view",
              data: "view",
              details: "view"
          },
          2: {
              users: "view",
              data: "view",
              details: "view"
          },
          3: {
              users: "view",
              data: "view",
              details: "view"
          },
          4: {
              users: "view",
              data: "view",
              details: "view"
          },
          5: {
              users: "view",
              data: "view",
              details: "view"
          },
          6: {
              users: "view",
              data: "view",
              details: "view"
          },
          7: {
              users: "view",
              data: "view",
              details: "view"
          },
          8: {
              users: "view",
              data: "view",
              details: "view"
          },
          9: {
              users: "view",
              data: "view",
              details: "view"
          },
          10: {
              users: "view",
              data: "view",
              details: "view"
          }
      },
      roles: {
          admin: [],
          collaborator: [],
          viewer: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10
          ]
      },
      role: "External User"
  }
]

const TableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`

const StyledTable = styled(MDBDatatable)`
  width: 80%;
  padding: 20px 0;
`

const StyledLink = styled(Link)`
  color: inherit;
  font-family: Barlow, sans-serif;
  font-weight: 300; 
  font-size: .9rem;
`

const StyledButton = styled(MDBBtn)`
  padding: 3px!important;
  margin: 3px!important;
`

const StyledDiv = styled.div`
  display: inline-block;
`

const StyledTrash = styled(MDBBtn)`
  padding: 3px!important;
  margin: 3px!important;
  background-color: #d32f2f;
`

function App() {
  const [tableData, setTableData] = useState({
    columns: columns,
    rows: rows
  })

  function addCustomButtons(users) {
    const usersArr = [];
    let idx = 0;

    // console.log('in AddCustomButtons', company.userIds, users)

    users.map((row) => {
        usersArr.push({
          ...row,
          index: idx,
          email: (
            <StyledLink
              to='#'
              onClick={(e) => {
                window.location.href = `mailto:${row.emailraw}`;
                e.preventDefault();
              }}
            >
              {row.emailraw}
            </StyledLink>
          ),
          buttons: (
            <>
              <StyledButton
                size='sm'
                floating
                className='message-btn'
                onClick={() => console.log(`send a message to ${row.emailraw}`)}
              >
                <MDBIcon icon='envelope' />
              </StyledButton>
              <StyledButton
                id={`edit-btn-${idx}`}
                outline
                size='sm'
                floating
                className='call-btn'
                onClick={(event) => editUserHandler(event)}
              >
                <MDBIcon icon='ellipsis-h' />
              </StyledButton>
              <StyledTrash
                id={`remove-btn-${idx}`}
                bemkey={`remove-btn-${idx}`}
                size='sm'
                floating
                className='remove-user-btn'
                onClick={(event) => deleteRow(event)}
              // onClick={(event) => printEvent(event)}
              >
                <MDBIcon icon="trash" />
              </StyledTrash>
            </>
          ),
        });

        idx = ++idx;
      }
    )

    return usersArr;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MDBDatatable 
          fixedHeader
          maxHeight='460px'
          data={tableData}
        />
      </header>
    </div>
  );
}

export default App;
