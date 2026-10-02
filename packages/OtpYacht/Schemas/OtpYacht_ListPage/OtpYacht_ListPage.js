define("OtpYacht_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "OtpYacht"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "OtpYacht"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_OtpName",
							"caption": "#ResourceString(PDS_OtpName)#",
							"dataValueType": 1,
							"width": 147
						},
						{
							"id": "177d154b-135f-8071-e1f9-4c95eb23dc49",
							"code": "PDS_OtpDriveType",
							"caption": "#ResourceString(PDS_OtpDriveType)#",
							"dataValueType": 10,
							"width": 152
						},
						{
							"id": "50c1186b-dbf5-bc3c-79bc-9a1003734b9e",
							"code": "PDS_OtpStatus",
							"caption": "#ResourceString(PDS_OtpStatus)#",
							"dataValueType": 10,
							"width": 124
						},
						{
							"id": "d21fcfe8-bf59-9c68-561f-a859475d6ce0",
							"code": "PDS_OtpPrice",
							"caption": "#ResourceString(PDS_OtpPrice)#",
							"dataValueType": 32,
							"width": 183
						}
					],
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						},
						"header": {
							"visible": true
						},
						"columns": {
							"dragAndDrop": false,
							"resizing": false,
							"sorting": true,
							"adding": false
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "OtpYacht",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_OtpName": {
						"modelConfig": {
							"path": "PDS.OtpName"
						}
					},
					"PDS_OtpDriveType": {
						"modelConfig": {
							"path": "PDS.OtpDriveType"
						}
					},
					"PDS_OtpStatus": {
						"modelConfig": {
							"path": "PDS.OtpStatus"
						}
					},
					"PDS_OtpPrice": {
						"modelConfig": {
							"path": "PDS.OtpPrice"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "OtpYacht",
					"attributes": {
						"OtpName": {
							"path": "OtpName"
						},
						"OtpDriveType": {
							"path": "OtpDriveType"
						},
						"OtpStatus": {
							"path": "OtpStatus"
						},
						"OtpPrice": {
							"path": "OtpPrice"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});