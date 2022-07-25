import logo from './logo.svg';
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

function App() {
  const [tableData, setTableData] = useState({
    columns: columns,
    rows: rows
  })

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
