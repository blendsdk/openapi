/**
 * License information for the exposed API.
 *
 * @export
 * @interface ILicenseObject
 */
export interface ILicenseObject {
    /**
     * The license name used for the API.
     *
     * @type {string}
     * @memberof ILicenseObject
     */
    name: string;
    /**
     * A URL to the license used for the API. MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof ILicenseObject
     */
    url?: string;
}

/**
 * Contact information for the exposed API.
 *
 * @export
 * @interface IContactObject
 */
export interface IContactObject {
    /**
     * he identifying name of the contact person/organization.
     *
     * @type {string}
     * @memberof IContactObject
     */
    name?: string;
    /**
     * The URL pointing to the contact information. MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof IContactObject
     */
    url?: string;
    /**
     * The email address of the contact person/organization.
     * MUST be in the format of an email address.
     *
     * @type {string}
     * @memberof IContactObject
     */
    email?: string;
}

/**
 * The object provides metadata about the API.
 *
 * The metadata MAY be used by the clients if needed, and
 * MAY be presented in editing or documentation generation
 * tools for convenience.
 *
 * @export
 * @interface IInfoObject
 */
export interface IInfoObject {
    /**
     * The title of the API.
     *
     * @type {string}
     * @memberof IInfoObject
     */
    title: string;
    /**
     * A short description of the API. CommonMark syntax
     * MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IInfoObject
     */
    description?: string;
    /**
     * A URL to the Terms of Service for the API. MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof IInfoObject
     */
    termsOfService?: string;
    /**
     * The contact information for the exposed API.
     *
     * @type {IContactObject}
     * @memberof IInfoObject
     */
    contact?: IContactObject;
    /**
     * The license information for the exposed API.
     *
     * @type {ILicenseObject}
     * @memberof IInfoObject
     */
    license?: ILicenseObject;
    /**
     * The version of the OpenAPI document (which is distinct from the
     * OpenAPI Specification version or the API implementation version).
     *
     * @type {string}
     * @memberof IInfoObject
     */
    version: string;
}

/**
 * Interface describing a generic dictionary
 *
 * @export
 * @interface IDictionaryOf
 * @template AType
 */
export interface IDictionaryOf<AType> {
    [name: string]: AType;
}

/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * @export
 * @interface IServerVariableObject
 */
export interface IServerVariableObject {
    /**
     * An enumeration of string values to be used if the substitution options
     * are from a limited set. The array SHOULD NOT be empty.
     *
     * @type {string[]}
     * @memberof IServerVariableObject
     */
    enum?: string[];
    /**
     * The default value to use for substitution, which SHALL be sent if an
     * alternate value is not supplied. Note this behavior is different than
     * the Schema Object's treatment of default values, because in those cases
     *
     * parameter values are optional. If the enum is defined, the value SHOULD
     * exist in the enum's values.
     *
     * @type {string}
     * @memberof IServerVariableObject
     */
    default: string;
    /**
     * An optional description for the server variable. CommonMark syntax MAY be
     * used for rich text representation.
     *
     * @type {string}
     * @memberof IServerVariableObject
     */
    description?: string;
}

/**
 * An object representing a Server.
 *
 * @export
 * @interface IServerObject
 */
export interface IServerObject {
    /**
     * A URL to the target host. This URL supports Server Variables
     * and MAY be relative, to indicate that the host location is
     * relative to the location where the OpenAPI document is being served.
     *
     * Variable substitutions will be made when a variable is named in {brackets}.
     *
     * @type {string}
     * @memberof IServerObject
     */
    url: string;
    /**
     * An optional string describing the host designated by the URL.
     * CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IServerObject
     */
    description?: string;
    /**
     * A map between a variable name and its value. The value is used
     * for substitution in the server's URL template.
     *
     * @type {IServerVariableObjectDictionary}
     * @memberof IServerObject
     */
    variables: IDictionaryOf<IServerVariableObject>;
}

/**
 * A simple object to allow referencing other components in the
 * specification, internally and externally.
 *
 * @export
 * @interface IReferenceObject
 */
export interface IReferenceObject {
    /**
     * The reference string
     *
     * @type {string}
     * @memberof IReferenceObject
     */
    $ref: string;
}

/**
 * Describes a single API operation on a path.
 *
 * @export
 * @interface IOperationObject
 */
export interface IOperationObject {
    /**
     * A list of tags for API documentation control. Tags can be used
     * for logical grouping of operations by resources or any other qualifier.
     *
     * @type {string[]}
     * @memberof IOperationObject
     */
    tags?: string[];
    /**
     * A short summary of what the operation does.
     *
     * @type {string}
     * @memberof IOperationObject
     */
    summary?: string;
    /**
     * A verbose explanation of the operation behavior.
     * CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IOperationObject
     */
    description?: string;
    /**
     * Additional external documentation for this operation.
     *
     * @type {IExternalDocumentationObject}
     * @memberof IOperationObject
     */
    externalDocs?: IExternalDocumentationObject;
    /**
     * Unique string used to identify the operation. The id MUST be unique
     * among all operations described in the API. The operationId value
     * is case-sensitive. Tools and libraries MAY use the operationId to
     * uniquely identify an operation, therefore, it is RECOMMENDED to
     * follow common programming naming conventions.
     *
     * @type {string}
     * @memberof IOperationObject
     */
    operationId?: string;
    /**
     * A list of parameters that are applicable for this operation.
     * If a parameter is already defined at the Path Item, the new definition
     * will override it but can never remove it. The list MUST NOT include
     * duplicated parameters. A unique parameter is defined by a combination
     * of a name and location. The list can use the Reference Object to link
     * to parameters that are defined at the OpenAPI Object's components/parameters.
     *
     * @type {(IParameterObject[] | IReferenceObject[])}
     * @memberof IOperationObject
     */
    parameters?: IParameterObject[] | IReferenceObject[];
    /**
     * The request body applicable for this operation. The requestBody is only
     * supported in HTTP methods where the HTTP 1.1 specification RFC7231 has
     * explicitly defined semantics for request bodies. In other cases where
     * the HTTP spec is vague, requestBody SHALL be ignored by consumers.
     *
     * @type {IRequestBodyObject}
     * @memberof IOperationObject
     */
    requestBody?: IRequestBodyObject | IReferenceObject;
    /**
     * The list of possible responses as they are returned from executing this operation.
     *
     * @type {IResponsesObject}
     * @memberof IOperationObject
     */
    responses: IResponsesObject;
    /**
     * A map of possible out-of band callbacks related to the parent operation.
     * The key is a unique identifier for the Callback Object. Each value in the
     * map is a Callback Object that describes a request that may be initiated
     * by the API provider and the expected responses.
     *
     * @type {(IDictionaryOf<ICallbackObject | IReferenceObject>)}
     * @memberof IOperationObject
     */
    callbacks?: IDictionaryOf<ICallbackObject | IReferenceObject>;
    /**
     * Declares this operation to be deprecated. Consumers SHOULD refrain
     * from usage of the declared operation. Default value is false.
     *
     * @type {boolean}
     * @memberof IOperationObject
     */
    deprecated?: boolean;
    /**
     * A declaration of which security mechanisms can be used for this operation.
     * The list of values includes alternative security requirement objects that
     * can be used. Only one of the security requirement objects need to be
     * satisfied to authorize a request. To make security optional, an empty security
     * requirement ({}) can be included in the array. This definition overrides any
     * declared top-level security. To remove a top-level security declaration,
     * an empty array can be used.
     *
     * @type {ISecurityRequirementObject[]}
     * @memberof IOperationObject
     */
    security?: ISecurityRequirementObject[];
    /**
     * An alternative server array to service this operation. If an alternative
     * server object is specified at the Path Item Object or Root level,
     * it will be overridden by this value.
     *
     * @type {IServerObject[]}
     * @memberof IOperationObject
     */
    servers?: IServerObject[];
}

/**
 * Describes the operations available on a single path. A Path Item MAY be empty,
 * due to ACL constraints. The path itself is still exposed to the documentation
 * viewer but they will not know which operations and parameters are available.
 *
 * @export
 * @interface IPathItemObject
 * @template OperationExtensionType
 */
export interface IPathItemObject<OperationExtensionType = {}> {
    /**
     * Allows for an external definition of this path item. The referenced
     * structure MUST be in the format of a Path Item Object.
     * In case a Path Item Object field appears both in the defined object
     * and the referenced object, the behavior is undefined.
     *
     * @type {string}
     * @memberof IPathItemObject
     */
    $ref?: string;
    /**
     * An optional, string summary, intended to apply to all operations in this path.
     *
     * @type {string}
     * @memberof IPathItemObject
     */
    summary?: string;
    /**
     * An optional, string description, intended to apply to all operations in this
     * path. CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IPathItemObject
     */
    description?: string;
    /**
     * A definition of a GET operation on this path.
     *
     * @type {(IOperationObject & OperationExtensionType)}
     * @memberof IPathItemObject
     */
    get?: IOperationObject & OperationExtensionType;
    /**
     * A definition of a PUT operation on this path.
     *
     * @type {(IOperationObject & OperationExtensionType)}
     * @memberof IPathItemObject
     */
    put?: IOperationObject & OperationExtensionType;
    /**
     * A definition of a POST operation on this path.
     *
     * @type {(IOperationObject & OperationExtensionType)}
     * @memberof IPathItemObject
     */
    post?: IOperationObject & OperationExtensionType;
    /**
     * A definition of a DELETE operation on this path.
     *
     * @type {(IOperationObject & OperationExtensionType)}
     * @memberof IPathItemObject
     */
    delete?: IOperationObject & OperationExtensionType;
    /**
     * A definition of a OPTIONS operation on this path.
     *
     * @type {(IOperationObject & OperationExtensionType)}
     * @memberof IPathItemObject
     */
    options?: IOperationObject & OperationExtensionType;
    /**
     * A definition of a HEAD operation on this path.
     *
     * @type {(IOperationObject & OperationExtensionType)}
     * @memberof IPathItemObject
     */
    head?: IOperationObject & OperationExtensionType;
    /**
     * A definition of a PATCH operation on this path.
     *
     * @type {(IOperationObject & OperationExtensionType)}
     * @memberof IPathItemObject
     */
    patch?: IOperationObject & OperationExtensionType;
    /**
     * A definition of a TRACE operation on this path.
     *
     * @type {(IOperationObject & OperationExtensionType)}
     * @memberof IPathItemObject
     */
    trace?: IOperationObject & OperationExtensionType;
    /**
     * An alternative server array to service all operations in this path.
     *
     * @type {[IServerObject]}
     * @memberof IPathItemObject
     */
    servers?: [IServerObject];
    /**
     * A list of parameters that are applicable for all the operations
     * described under this path. These parameters can be overridden at
     * the operation level, but cannot be removed there.
     *
     * The list MUST NOT include duplicated parameters.
     * A unique parameter is defined by a combination of a name and location.
     * The list can use the Reference Object to link to parameters that
     * are defined at the OpenAPI Object's components/parameters.
     *
     * @type null
     * @memberof IPathItemObject
     */
    parameters?: IParameterObject[] | IReferenceObject[];
}

/**
 * Holds the relative paths to the individual endpoints and their operations.
 * The path is appended to the URL from the Server Object in order to construct
 * the full URL. The Paths MAY be empty, due to ACL constraints.
 *
 * For Keys:
 * A relative path to an individual endpoint. The field name MUST begin with a
 * forward slash (/). The path is appended (no relative URL resolution) to the expanded
 * URL from the Server Object's url field in order to construct the full URL.
 * Path templating is allowed. When matching URLs, concrete (non-templated) paths
 * would be matched before their templated counterparts. Templated paths with the
 * same hierarchy but different templated names MUST NOT exist as they are identical.
 * In case of ambiguous matching, it's up to the tooling to decide which one to use.
 *
 * @export
 * @interface IPathsObject
 * @extends {(IDictionaryOf<IPathItemObject<OperationExtensionType> & ExtensionType>)}
 * @template ExtensionType
 * @template OperationExtensionType
 */
export interface IPathsObject<ExtensionType = {}, OperationExtensionType = {}>
    extends IDictionaryOf<IPathItemObject<OperationExtensionType> & ExtensionType> {}

/**
 * Lists the required security schemes to execute this operation. The name used
 * for each property MUST correspond to a security scheme declared in the
 * Security Schemes under the Components Object.
 *
 * @export
 * @interface ISecurityRequirementObject
 * @extends {IDictionaryOf<string>}
 */
export interface ISecurityRequirementObject extends IDictionaryOf<string> {}

export interface IExternalDocumentationObject {
    /**
     * The URL for the target documentation. Value MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof IExternalDocumentationObject
     */
    url: string;
    /**
     * A short description of the target documentation. CommonMark syntax
     * MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IExternalDocumentationObject
     */
    description?: string;
}

/**
 * Adds metadata to a single tag that is used by the Operation Object.
 * It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * @export
 * @interface ITagObject
 */
export interface ITagObject {
    /**
     * The name of the tag.
     *
     * @type {string}
     * @memberof ITagObject
     */
    name: string;
    /**
     * A short description for the tag. CommonMark syntax MAY be
     * used for rich text representation.
     *
     * @type {string}
     * @memberof ITagObject
     */
    description?: string;
    /**
     * Additional external documentation for this tag.
     *
     * @type {IExternalDocumentationObject}
     * @memberof ITagObject
     */
    externalDocs?: IExternalDocumentationObject;
}

/**
 * Contact information for the exposed API.
 *
 * @export
 * @interface IContactObject
 */
export interface IContactObject {
    /**
     * The identifying name of the contact person/organization.
     *
     * @type {string}
     * @memberof IContactObject
     */
    name?: string;
    /**
     * The URL pointing to the contact information. MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof IContactObject
     */
    url?: string;
    /**
     * The email address of the contact person/organization. MUST be in the format
     * of an email address.
     *
     * @type {string}
     * @memberof IContactObject
     */
    email?: string;
}

/**
 * Describes a single request body.
 *
 * @export
 * @interface IRequestBodyObject
 */
export interface IRequestBodyObject {
    /**
     * The content of the request body. The key is a media type or media
     * type range and the value describes it. For requests that match
     * multiple keys, only the most specific key is applicable.
     * e.g. text/plain overrides text/*
     *
     * @type {IDictionaryOf<IMediaTypeObject>}
     * @memberof IRequestBodyObject
     */
    content?: IDictionaryOf<IMediaTypeObject>;
    /**
     * A brief description of the request body. This could contain examples
     * of use. CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IRequestBodyObject
     */
    description?: string;
    /**
     * Determines if the request body is required in the request. Defaults to false.
     *
     * @type {boolean}
     * @memberof IRequestBodyObject
     */
    required?: boolean;
}

/**
 * This is the root document object of the OpenAPI document.
 *
 * @export
 * @interface IOpenAPI
 */
export interface IOpenAPI<PathExtensionType = {}, OperationExtensionType = {}> {
    /**
     * REQUIRED. This string MUST be the semantic version number of the OpenAPI
     * Specification version that the OpenAPI document uses. The openapi field
     * SHOULD be used by tooling specifications and clients to interpret the
     * OpenAPI document. This is not related to the API info.version string.
     *
     * @type {string}
     * @memberof IOpenAPI
     */
    openapi: string;
    /**
     * Provides metadata about the API.
     * The metadata MAY be used by tooling as required.
     *
     * @type {IInfoObject?}
     * @memberof IOpenAPI
     */
    info: IInfoObject;
    /**
     * An array of Server Objects, which provide connectivity information to
     * a target server. If the servers property is not provided, or is an
     * empty array, the default value would be a Server Object with a
     * url value of /.
     *
     * @type {IServersObject}
     * @memberof IOpenAPI
     */
    servers: IServerObject[];
    /**
     * The available paths and operations for the API.
     *
     * @type {IPathsObject<PathExtensionType, OperationExtensionType>}
     * @memberof IOpenAPI
     */
    paths: IPathsObject<PathExtensionType, OperationExtensionType>;
    /**
     * An element to hold various schemas for the specification.
     *
     * @type {IComponentsObject}
     * @memberof IOpenAPI
     */
    components: IComponentsObject;
    /**
     * A declaration of which security mechanisms can be used across the API.
     * The list of values includes alternative security requirement objects
     * that can be used.
     *
     * Only one of the security requirement objects need to be satisfied to
     * authorize a request. Individual operations can override this
     * definition. To make security optional, an empty security requirement
     * ({}) can be included in the array.
     *
     * @type {ISecurityRequirementObject}
     * @memberof IOpenAPI
     */
    security: ISecurityRequirementObject[];
    /**
     * A list of tags used by the specification with additional metadata.
     * The order of the tags can be used to reflect on their order by the
     * parsing tools.
     *
     * Not all tags that are used by the Operation Object must be declared.
     * The tags that are not declared MAY be organized randomly or based
     * on the tools' logic. Each tag name in the list MUST be unique.
     *
     * @type {ITagObject[]}
     * @memberof IOpenAPI
     */
    tags: ITagObject[];
    /**
     * Additional external documentation.
     *
     * @type {IExternalDocumentationObject}
     * @memberof IOpenAPI
     */
    externalDocs: IExternalDocumentationObject;
}
